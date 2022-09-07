import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  Card, CardBody, CardHeader, CardHeaderBackButton, Error, Loading, MessageInput, MessageItem,
} from '../components';
import useAxios from '../hooks/useAxios';
import mockMessages from '../mock-messages';
import { Message, User } from '../types';

const Chat = (): JSX.Element => {
  const { id } = useParams();
  const { data: user, loading, error } = useAxios<User>(`https://dummyjson.com/users/${id as string}`);
  const [messages, setMessages] = useState<Message[]>([]);
  const navigate = useNavigate();
  const emptyDivRef = useRef<HTMLDivElement>();
  // sample id for new messages (to support key for loop)
  const sampleId = useRef(11);

  useEffect(() => {
    // Get and set mock messages from 'mock-messages.js'
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
      <CardHeader>
        <CardHeaderBackButton onBack={() => navigate(-1)} />
        <Link to={`/${user.id}/profile`} className="flex flex-row text-blue-600">
          <img src={user.image} alt={user.username} className="w-7 h-7 bg-indigo-300 rounded-full mr-3" />
          <h1 className="text-lg">{user.firstName}</h1>
        </Link>
      </CardHeader>
      <CardBody>
        <ul className="space-y-3 p-5">
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
