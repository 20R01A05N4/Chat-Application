import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
<ChatContextProvider>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </ChatContextProvider>
  </AuthContextProvider>
);

reportWebVitals();
