import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Card, CardBody, CardFooter, CardHeader, Error, Loading, MessageItem,
} from '../components';
import useAxios from '../hooks/useAxios';
import { Message, User } from '../types';

const mockMessages = [
  {
    id: 1,
    sent: false,
    text: 'Hi!',
  },
  {
    id: 2,
    sent: true,
    text: 'Hello!',
  },
  {
    id: 3,
    sent: false,
    text: 'How is it going?',
  },
];

const Chat = (): JSX.Element => {
  const { id } = useParams();
  const { data: user, loading, error } = useAxios<User>(`https://dummyjson.com/users/${id as string}`);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const sampleId = useRef(3);

  useEffect(() => {
    setMessages(mockMessages);
  }, []);

  const handleFormSubmit = useCallback((event: any) => {
    event.preventDefault();
    setMessages([
      ...messages,
      {
        id: sampleId.current += 1,
        sent: true,
        text: message,
      },
    ]);
    setMessage('');
  }, [messages, message]);

  const handleInputChange = useCallback((event: any) => {
    setMessage(event.target.value);
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
      </CardBody>
      <CardFooter>
        <form onSubmit={handleFormSubmit} className="w-full">
          <input
            autoFocus
            type="text"
            className="text-gray-900 rounded-b block w-full p-4 focus-visible:outline-none overflow-hidden"
            placeholder="Type your message..."
            value={message}
            onChange={handleInputChange}
          />
        </form>
      </CardFooter>
    </Card>
  );
};

export default Chat;
