import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { store } from './redux/store';
import App from './App';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
