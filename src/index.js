import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProvider } from './context/AppContext'; // استيراد AppProvider
import './index.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider> {/* لف التطبيق بـ AppProvider */}
        <App />
      </AppProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
