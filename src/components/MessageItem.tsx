import React from 'react';
import { Message } from '../types';

const Messagemessage = ({ message }: { message: Message }): JSX.Element => (
  <li key={message.id} className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}>
    <div className={`relative max-w-xl px-4 py-2 rounded shadow-sm ${message.sent ? 'bg-indigo-500 text-white' : 'bg-gray-100'}`}>
      <span className="block">{message.text}</span>
    </div>
  </li>
);

export default Messagemessage;
