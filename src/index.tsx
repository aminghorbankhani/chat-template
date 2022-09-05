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
    <div className="w-screen h-screen bg-gray-50 flex justify-center items-center">
      <div className="bg-white shadow rounded-xl w-[90vw] h-[90vh] max-w-3xl p-4">
        <Routes>
          <Route path="/">
            <Route index element={<Chats />} />
            <Route path=":username" element={<Chat />} />
            <Route path=":username/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </div>
  </BrowserRouter>,
);
