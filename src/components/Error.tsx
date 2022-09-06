import React from 'react';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card';

const Error = ({ message }: { message: string }): JSX.Element => (
  <Card>
    <div className="flex flex-1 justify-center items-center">
      <div className="text-center">
        <FontAwesomeIcon className="text-6xl text-gray-500 mb-5" icon={faCircleExclamation} />
        <h1 className="text-xl font-semibold mb-1">Something went wrong!</h1>
        <p>{message}</p>
      </div>
    </div>
  </Card>
);

export default Error;
