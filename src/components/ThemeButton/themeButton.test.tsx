import { Theme } from '@appTypes/index';
import { ThemeButton } from '@components/ThemeButton';
import { CurrenciesList } from '@constants/enums';
import * as hooks from '@hooks/reduxHooks';
import * as actions from '@reducers/appReducer';
import appReducer from '@reducers/appReducer';
import { store } from '@store/index';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

describe('Theme button', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should be rendered on the page', () => {
    render(
      <Provider store={store}>
        <div className='app light'>
          <ThemeButton className='' />
        </div>
      </Provider>,
    );

    const switcher = screen.getByTestId('theme-switcher');
    const toggler = screen.getByTestId('theme-toggler');

    expect(switcher).toBeInTheDocument();
    expect(toggler).toBeInTheDocument();
  });

  it('should switch the app theme', () => {
    render(
      <Provider store={store}>
        <div className='app light'>
          <ThemeButton className='' />
        </div>
      </Provider>,
    );

    const switcher = screen.getByTestId('theme-switcher');
    const toggler = screen.getByTestId('theme-toggler');
    const mockDispatch = jest.spyOn(hooks, 'useDispatchTyped');
    const mockAction = jest.spyOn(actions, 'toggleAppTheme');

    fireEvent.click(switcher);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockAction).toHaveBeenCalledTimes(1);

    fireEvent.click(switcher);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockAction).toHaveBeenCalledTimes(2);

    fireEvent.click(switcher);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockAction).toHaveBeenCalledTimes(3);

    fireEvent.click(toggler);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockAction).toHaveBeenCalledTimes(4);

    fireEvent.click(toggler);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockAction).toHaveBeenCalledTimes(5);
  });

  it('should update the app state', () => {
    const initialState = {
      theme: 'dark' as Theme,
      modal: false,
      currentCurrency: CurrenciesList.BYN,
    };

    render(
      <Provider store={store}>
        <div className='app dark'>
          <ThemeButton className='' />
        </div>
      </Provider>,
    );

    const toggler = screen.getByTestId('theme-toggler');
    const dispatch = jest.spyOn(hooks, 'useDispatchTyped');
    const mockAction = actions.toggleAppTheme;

    expect(appReducer(initialState, { type: '' }).theme).toEqual('dark');

    fireEvent.click(toggler);
    expect(dispatch).toHaveBeenCalled();
    expect(appReducer(initialState, mockAction('light')).theme).toEqual('light');
  });
});
