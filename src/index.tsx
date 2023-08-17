import '@styles/index.scss';

import { App } from '@components/app';
import ErrorBoundary from '@components/error-boundary';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
);
