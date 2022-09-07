import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const CardHeaderBackButton = ({ onBack }: { onBack: () => void }): JSX.Element => (
  <button onClick={onBack} className="mr-4 pr-4 border-r">
    <FontAwesomeIcon className="text-base" icon={faChevronLeft} />
  </button>
);

export default CardHeaderBackButton;
