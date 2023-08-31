import { CurrenciesList } from '@constants/enums';
import { Theme } from '@constants/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppSLiceState {
  theme: Theme;
  modal: boolean;
  currentCurrency: keyof typeof CurrenciesList;
}

const initialState: IAppSLiceState = {
  theme: (localStorage.getItem('theme') as Theme) ?? 'dark',
  modal: false,
  currentCurrency: CurrenciesList.BYN,
};

const appSlice = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    toggleAppTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
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
