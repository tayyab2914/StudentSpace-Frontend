import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConfigProvider } from 'antd';
import { INPUT } from './components/Colors';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider
    theme={{
      components: {
        Input: INPUT,
      },
    }}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ConfigProvider>
);

reportWebVitals();
