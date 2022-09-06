import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card';

const Loading = (): JSX.Element => (
  <Card>
    <div className="flex flex-1 justify-center items-center">
      <FontAwesomeIcon className="text-6xl text-gray-500 mb-5 fa-spin" icon={faSpinner} />
    </div>
  </Card>
);

export default Loading;
