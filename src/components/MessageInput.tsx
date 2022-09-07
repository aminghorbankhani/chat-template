import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MessageInput = ({ onSubmit }: { onSubmit: (message: string) => void }): JSX.Element => {
  const [message, setMessage] = useState('');

  const handleInputChange = useCallback((event: any) => {
    setMessage(event.target.value);
  }, []);

  const handleFormSubmit = useCallback((event: any) => {
    event.preventDefault();
    if (message !== '') {
      onSubmit(message);
      setMessage('');
    }
  }, [message]);

  return (
    <div className="border-t flex flex-2">
      <div className="flex flex-1 items-center">
        <form onSubmit={handleFormSubmit} className="flex flex-1">
          <input
            autoFocus
            type="text"
            className="text-gray-900 rounded-b block w-full p-5 focus-visible:outline-none overflow-hidden"
            placeholder="Type your message..."
            value={message}
            onChange={handleInputChange}
          />
        </form>
        <button onClick={handleFormSubmit} className="flex items-center px-3 mr-5 aspect-square bg-blue-600 rounded-full">
          <FontAwesomeIcon icon={faChevronRight} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
