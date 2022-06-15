import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dataTables } from '../../data/address';
import { RootState } from '../../store';
import { DataTable } from '../../types';

interface DataTableState {
  data: DataTable[];
}

const initialState: DataTableState = {
  data: dataTables
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    search: (
      state,
      { payload: { data } }: PayloadAction<{ data: DataTable[] }>
    ) => {
      state.data = data;
    }
  }
});
export const selectStateAuth = (state: RootState) => state.auth;
export const { search } = homeSlice.actions;
export default homeSlice.reducer;
