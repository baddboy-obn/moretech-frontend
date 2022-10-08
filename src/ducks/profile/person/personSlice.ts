import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPersonal } from '../../../api/person.types';

type InitialType =
  | {
      loaded: false;
      errorOnLoad: boolean;
      data: undefined;
    }
  | {
      loaded: true;
      errorOnLoad: boolean;
      data: IPersonal;
    };

const initialState: InitialType = {
  loaded: false,
  errorOnLoad: false,
  data: undefined,
};

const personSlice = createSlice({
  name: 'person',
  initialState: initialState as InitialType,
  reducers: {
    uploadProfile(state, action: PayloadAction<IPersonal>) {
      state.data = action.payload;
      state.errorOnLoad = false;
      state.loaded = true;
    },
  },
});

export const { uploadProfile } = personSlice.actions;
export const personReducer = personSlice.reducer;
