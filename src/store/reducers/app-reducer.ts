import { CurrenciesList, Theme } from '@constants/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppSLiceState {
  theme: Theme;
  modal: boolean;
  currentCurrency: keyof typeof CurrenciesList;
}

const initialState: IAppSLiceState = {
  theme: 'dark',
  modal: false,
  currentCurrency: CurrenciesList.BYN,
};

const appSlice = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    toggleAppTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },

    setCurrentCurrency(state, action: PayloadAction<keyof typeof CurrenciesList>) {
      state.currentCurrency = action.payload;
    },

    setModal(state, action: PayloadAction<boolean>) {
      state.modal = action.payload;

      document.body.style.overflow = action.payload ? 'hidden' : 'auto';
    },
  },
});

export default appSlice.reducer;
export const { toggleAppTheme, setCurrentCurrency, setModal } = appSlice.actions;
