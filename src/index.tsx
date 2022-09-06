import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Chat, Chats, Profile } from './pages';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <div className="w-screen h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center">
      <Routes>
        <Route path="/">
          <Route index element={<Chats />} />
          <Route path=":id" element={<Chat />} />
          <Route path=":id/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>,
);
