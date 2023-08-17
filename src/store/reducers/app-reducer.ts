import { Theme } from '@constants/types';
import { createSlice } from '@reduxjs/toolkit';

interface IAppSLiceState {
  theme: Theme;
}

const initialState: IAppSLiceState = {
  theme: 'dark',
};

const appSlice = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    toggleAppTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export default appSlice.reducer;
export const { toggleAppTheme } = appSlice.actions;
