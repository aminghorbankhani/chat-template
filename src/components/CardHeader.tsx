import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const CardHeader = ({ title, onBack }: { title: string, onBack?: () => void }): JSX.Element => (
  <div className="border-b flex flex-2 items-center p-5">
    {(onBack !== undefined) && (
      <button onClick={onBack} className="mr-4 pr-4 border-r">
        <FontAwesomeIcon className="text-base" icon={faChevronLeft} />
      </button>
    )}
    <h1 className="text-lg">{title}</h1>
  </div>
);

export default CardHeader;
