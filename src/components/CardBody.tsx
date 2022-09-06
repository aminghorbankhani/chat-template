import React from 'react';

const CardBody = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <div className="overflow-auto scrollbar flex flex-1 flex-col">
    {children}
  </div>
);

export default CardBody;
