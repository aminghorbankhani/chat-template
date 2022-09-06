import React from 'react';
import {
  Loading, Error, UserItem, Card, CardBody, CardHeader,
} from '../components';
import useAxios from '../hooks/useAxios';
import { User } from '../types';

const Chats = (): JSX.Element => {
  const { data, loading, error } = useAxios<{ users: User[] }>('https://dummyjson.com/users');

  if (loading) {
    return <Loading />;
  }

  if (error.length > 0) {
    return <Error message={error} />;
  }

  return (
    <Card>
      <CardHeader title="Chats" />
      <CardBody>
        <ul className="list-none">
          {data.users.map((user) => (
            <UserItem user={user} key={user.id} />
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default Chats;
