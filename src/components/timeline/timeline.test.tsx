import { Timeline } from '@components/Timeline';
import { store } from '@store/index';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import { Select } from './Select';

describe('test', () => {
  const { requiredValues } = store.getState().diagram;
  const mockCurrenciesData = JSON.parse(
    '{"data":{"AUD":{"symbol":"AU$","name":"Australian Dollar","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"AUD","name_plural":"Australian dollars"},"BYN":{"symbol":"Br","name":"Belarusian ruble","symbol_native":"Br","decimal_digits":2,"rounding":0,"code":"BYN","name_plural":"Belarusian rubles"},"CHF":{"symbol":"CHF","name":"Swiss Franc","symbol_native":"CHF","decimal_digits":2,"rounding":0,"code":"CHF","name_plural":"Swiss francs"},"CNY":{"symbol":"CN¥","name":"Chinese Yuan","symbol_native":"CN¥","decimal_digits":2,"rounding":0,"code":"CNY","name_plural":"Chinese yuan"},"EUR":{"symbol":"€","name":"Euro","symbol_native":"€","decimal_digits":2,"rounding":0,"code":"EUR","name_plural":"Euros"},"GBP":{"symbol":"£","name":"British Pound Sterling","symbol_native":"£","decimal_digits":2,"rounding":0,"code":"GBP","name_plural":"British pounds sterling"},"JPY":{"symbol":"¥","name":"Japanese Yen","symbol_native":"￥","decimal_digits":0,"rounding":0,"code":"JPY","name_plural":"Japanese yen"},"PLN":{"symbol":"zł","name":"Polish Zloty","symbol_native":"zł","decimal_digits":2,"rounding":0,"code":"PLN","name_plural":"Polish zlotys"},"UAH":{"symbol":"₴","name":"Ukrainian Hryvnia","symbol_native":"₴","decimal_digits":2,"rounding":0,"code":"UAH","name_plural":"Ukrainian hryvnias"},"USD":{"symbol":"$","name":"US Dollar","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"USD","name_plural":"US dollars"}}}',
  );

  it('Should provide the currencies list', () => {
    expect(true).toBe(true);

    const handler = jest.fn();
    const defaultOption = 'Choose the currency';

    render(<Select handlerOnClick={handler} option={defaultOption} data={mockCurrenciesData} />);

    const current = screen.getByTestId('timeline-currency');
    expect(current).toBeInTheDocument();
    fireEvent.click(current);

    const BYN = screen.getByText('Belarusian ruble');
    expect(BYN).toBeInTheDocument();
  });

  it('Should provide the currencies cost inputs and show modal when the diagram will be created', async () => {
    render(
      <div className='app'>
        <Timeline showInputs={true} />
      </div>,
    );

    const inputs = screen.getAllByTestId('timeline-input');
    expect(inputs.length).toEqual(requiredValues);
  });

  it('Should render the diagram button and modal when all inputs will has a value', async () => {
    render(
      <Provider store={store}>
        <div className='app'>
          <Timeline showInputs={true} />
        </div>
      </Provider>,
    );

    const inputs = screen.getAllByTestId('timeline-input');
    expect(inputs.length).toEqual(requiredValues);

    for (const input of inputs) {
      const value = String(1);
      await userEvent.type(input, value);
      expect(input).toHaveValue(Number(value));
    }

    const diagramCompleatedModal = screen.getByTestId('diagram-created-modal');
    expect(diagramCompleatedModal).toBeInTheDocument();
  });

  it('Should render the diagram by input values by clicking to the button', async () => {
    render(
      <Provider store={store}>
        <div className='app'>
          <Timeline showInputs={true} />
        </div>
      </Provider>,
    );

    const inputs = screen.getAllByTestId('timeline-input');
    expect(inputs.length).toEqual(requiredValues);

    for (const input of inputs) {
      const value = String(2);
      await userEvent.clear(input);
      await userEvent.type(input, value);
      expect(input).toHaveValue(Number(value));
    }

    await userEvent.type(inputs[inputs.length - 1], String(1));

    const diagramCompleatedModal = screen.getByTestId('diagram-created-modal');
    expect(diagramCompleatedModal).toBeInTheDocument();

    const showDiagramButton = screen.getByTestId('timeline-button');
    expect(showDiagramButton).toBeInTheDocument();

    fireEvent.click(showDiagramButton);
    const diagram = screen.getByTestId('diagram');
    expect(diagram).toBeInTheDocument();
  });
});
