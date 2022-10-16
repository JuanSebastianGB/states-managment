import { slicesTypes, User } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

export const userInitialState = {
  name: '',
  email: '',
};

const userSlice = createSlice({
  name: slicesTypes.USER,
  initialState: userInitialState,
  reducers: {
    createUser: (_, action): User => action.payload,
    modifyUser: (state, action): User => ({ ...state, ...action.payload }),
    resetUser: (state,action): User => userInitialState,
  },
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
