import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';

const UserItem = ({ user }: { user: User }): JSX.Element => (
  <li key={user.id} className="border-b last:border-b-0">
    <Link to={`/${user.id}`} className="p-5 flex flex-row items-center">
      <img src={user.image} alt={user.username} className="w-16 aspect-auto rounded-full bg-indigo-300" />
      <h3 className="ml-5">{user.firstName} {user.lastName}</h3>
    </Link>
  </li>
);

export default UserItem;
