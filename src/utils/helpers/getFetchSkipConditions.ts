interface ISkip {
  currenciesDataSkip: boolean;
  currensiesPricesSkip: boolean;
}

export function getSkipConditions(): ISkip {
  const lastUpdateDate = localStorage.getItem('update') || null;
  const currenciesData = localStorage.getItem('currenciesData') || null;

  const savedData = JSON.parse(localStorage.getItem('currenciesData'));
  const savedPrices = JSON.parse(localStorage.getItem('currenciesPrice'));

  return {
    currenciesDataSkip: Boolean(currenciesData && savedData),
    currensiesPricesSkip:
      savedPrices &&
      lastUpdateDate &&
      new Date(Number(lastUpdateDate)).toDateString() === new Date().toDateString(),
  };
}
