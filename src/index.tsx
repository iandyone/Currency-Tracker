import '@styles/index.scss';

import App from '@components/App';
import ErrorBoundary from '@components/ErrorBoundary';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { store } from './store';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <ErrorBoundary>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </ErrorBoundary>,
);
