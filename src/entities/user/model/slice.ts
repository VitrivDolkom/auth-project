import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IUserSlice {
  count: number;
}

const initialState: IUserSlice = {
  count: 1
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    resetCount: (state) => {
      state.count = 0;
    }
  }
});
