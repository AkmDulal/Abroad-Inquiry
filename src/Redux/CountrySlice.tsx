import { createSlice } from '@reduxjs/toolkit';

export const CountrySlice = createSlice({
  name: 'countrylist',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    getDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getDataStart, getDataSuccess} = CountrySlice.actions;

export const selectData = (state:any) => state.countrylist.data;

export default CountrySlice.reducer;