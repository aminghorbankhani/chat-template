import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Card, CardBody, CardHeader, Error, Loading, MessageInput, MessageItem,
} from '../components';
import useAxios from '../hooks/useAxios';
import mockMessages from '../mock-messages';
import { Message, User } from '../types';

const Chat = (): JSX.Element => {
  const { id } = useParams();
  const { data: user, loading, error } = useAxios<User>(`https://dummyjson.com/users/${id as string}`);
  const [messages, setMessages] = useState<Message[]>([]);
  const navigate = useNavigate();
  const sampleId = useRef(11);
  const emptyDivRef = useRef<HTMLDivElement>();

  useEffect(() => {
    setMessages(mockMessages);
  }, []);

  const sendMessage = useCallback((message: string) => {
    setMessages([
      ...messages,
      {
        id: sampleId.current += 1,
        sent: true,
        text: message,
      },
    ]);
  }, [messages]);

  const scrollToBottom = useCallback(() => {
    emptyDivRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const setEmptyDivRef = useCallback((ref: HTMLDivElement) => {
    emptyDivRef.current = ref;
    scrollToBottom();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error.length > 0) {
    return <Error message={error} />;
  }

  return (
    <Card>
      <CardHeader title={`Chat with ${user.firstName}`} onBack={() => navigate(-1)} />
      <CardBody>
        <ul className="space-y-2 p-5">
          {
            messages.map((item) => (
              <MessageItem key={item.id} message={item} />
            ))
          }
        </ul>
        <div ref={setEmptyDivRef} />
      </CardBody>
      <MessageInput onSubmit={sendMessage} />
    </Card>
  );
};

export default Chat;
