import React from 'react';

const ProfileLabel = ({ title, text }: { title: string, text: string }): JSX.Element => (
  <div className="flex flex-row text-sm mb-2">
    <h4 className="font-semibold">{title}:</h4>
    <span className="ml-2">{text}</span>
  </div>
);

export default ProfileLabel;
