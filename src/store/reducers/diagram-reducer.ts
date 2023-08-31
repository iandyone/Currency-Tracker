import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type diagramValues = { [key: number]: number };

interface IDiagramState {
  diagramData: diagramValues;
  requiredValues: number;
}

const initialState: IDiagramState = {
  diagramData: {},
  requiredValues: 30,
};

const diagramSlice = createSlice({
  name: 'diagramReducer',
  initialState,
  reducers: {
    setDiagramData(state, action: PayloadAction<diagramValues>) {
      state.diagramData = { ...action.payload };
    },
    resetDiagramData(state) {
      state.diagramData = initialState.diagramData;
    },
  },
});

export default diagramSlice.reducer;
export const { setDiagramData, resetDiagramData } = diagramSlice.actions;
