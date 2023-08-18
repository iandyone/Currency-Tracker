import '@styles/index.scss';

import { App } from '@components/app';
import ErrorBoundary from '@components/error-boundary';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ErrorBoundary>,
);
