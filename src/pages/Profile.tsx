import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Card, CardBody, CardHeader, CardHeaderBackButton, Error, Loading, ProfileLabel,
} from '../components';
import useAxios from '../hooks/useAxios';
import { User } from '../types';

const Profile = (): JSX.Element => {
  const { id } = useParams();
  const { data: user, loading, error } = useAxios<User>(`https://dummyjson.com/users/${id as string}`);
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  if (error.length > 0) {
    return <Error message={error} />;
  }

  return (
    <Card>
      <CardHeader>
        <CardHeaderBackButton onBack={() => navigate(-1)} />
        <h1 className="text-lg">Profile</h1>
      </CardHeader>
      <CardBody>
        <div className="p-5 flex flex-col">
          <div className="flex flex-col self-center items-center mb-5">
            <img src={user.image} alt={user.username} className="bg-indigo-300 rounded-full w-48 mb-3" />
            <h2 className="text-2xl font-semibold">{user.firstName} {user.lastName}</h2>
          </div>
          <div>
            <h3 className="font-semibold border-b pb-3 mb-3">About</h3>
            <div className="flex flex-col md:flex-row">
              <div className="flex-1">
                <ProfileLabel title="Username" text={user.username} />
                <ProfileLabel title="Email" text={user.email} />
                <ProfileLabel title="Phone" text={user.phone} />
                <ProfileLabel title="Age" text={user.age} />
              </div>
              <div className="flex-1">
                <ProfileLabel title="Birthday" text={user.birthDate} />
                <ProfileLabel title="Gender" text={user.gender} />
                <ProfileLabel title="Eye color" text={user.eyeColor} />
                <ProfileLabel title="Domain" text={user.domain} />
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Profile;
