import React from 'react';

const CardHeader = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <div className="border-b flex flex-2 items-center p-5">
    {children}
  </div>
);

export default CardHeader;
