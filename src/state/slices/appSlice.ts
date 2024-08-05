import { createSlice } from '@reduxjs/toolkit';


interface AppSliceState {

}

const initialState: AppSliceState = {
  
};

const appSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
  },
});

export const {
} = appSlice.actions;
export default appSlice.reducer;
