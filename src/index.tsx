import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { PostContainer } from './features/posts';
import 'react-toastify/dist/ReactToastify.css';
import './globals.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <PostContainer />
    </Provider>
  </React.StrictMode>
);
