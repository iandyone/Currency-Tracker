import { Header } from '@components/Header';
import { pagesList } from '@constants/routes';
import { store } from '@store/index';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import App from '.';

describe('Router tests', () => {
  it('Routes should be rendered', () => {
    act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </Provider>,
      );
    });

    pagesList.forEach(({ name }) => {
      const linkName = name.split(' ');
      const testId = linkName[0].toLowerCase() + '-route';
      const route = screen.getByTestId(testId);

      expect(route).toBeInTheDocument();
    });
  });

  it('Should render  home page by default', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>,
    );

    await waitFor(() => expect(screen.getByTestId('home-page')).toBeInTheDocument());
  });

  test('Should render page by the route', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: MemoryRouter },
    );

    const timelineLink = screen.getByTestId('timeline-route');
    fireEvent.click(timelineLink);
    await waitFor(() => {
      expect(screen.getByTestId('timeline-page')).toBeInTheDocument();
    });
  });
});
