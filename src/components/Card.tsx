import React from 'react';

const Card = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <div className="card">
    {children}
  </div>
);

export default Card;
