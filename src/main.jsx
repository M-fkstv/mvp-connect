import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.jsx';

import { RotatingLines } from 'react-loader-spinner';

import './index.css';
import { NotificationProvider } from './components/Context/BetContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotificationProvider>
      <RouterProvider
        router={router}
        fallbackElement={
          <RotatingLines
            strokeColor='grey'
            strokeWidth='5'
            animationDuration='0.75'
            width='96'
            visible={true}
          />
        }
      />
    </NotificationProvider>
  </React.StrictMode>,
);

