import React from 'react';

const CardFooter = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <div className="border-t flex flex-2">
    {children}
  </div>
);

export default CardFooter;
