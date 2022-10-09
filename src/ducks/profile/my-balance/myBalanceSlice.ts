import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from '../../index';
import { IWalletResponse } from '../../../api/person';

type InitialType =
  | {
      loaded: true;
      errorOnLoad: boolean;
      data: IWalletResponse;
    }
  | {
      loaded: false;
      errorOnLoad: boolean;
      data: undefined;
    };

const initialState: InitialType = {
  loaded: false,
  data: undefined,
  errorOnLoad: false,
};

const myBalanceSlice = createSlice({
  name: 'app/balance',
  initialState: initialState as InitialType,
  reducers: {
    setWalletData(state, { payload }: PayloadAction<IWalletResponse>) {
      state.loaded = true;
      state.errorOnLoad = false;
      state.data = payload;
    },
    setNeedWalletUpdate(state) {
      state.loaded = false;
      state.data = undefined;
      state.errorOnLoad = false;
    },
  },
});

export const { setWalletData, setNeedWalletUpdate } = myBalanceSlice.actions;
export const myBalanceReducer = myBalanceSlice.reducer;

export const useMyBalance = () =>
  useAppSelector((state) => state.profile.balance);
