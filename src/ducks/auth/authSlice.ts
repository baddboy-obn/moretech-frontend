import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from '../index';
import { BaseUser, IUserKey } from '../../api/person';
import { IProductCard } from '../../components/shop/main/product-card';

import image_1 from '../../mocks/team/telegram-peer-photo-size-2-792175081474336683-1-0-0 1.png';
import image_2 from '../../mocks/team/telegram-peer-photo-size-2-1187421972329506743-1-0-0 1.png';
import image_3 from '../../mocks/team/telegram-peer-photo-size-2-3493093496383973292-1-0-0 1.png';

export type IOtherUser = BaseUser & {
  key: IUserKey;
};

type InitialType =
  | {
      publicKey: string;
      authed: true;
      errorOnAuth: boolean;
      data: BaseUser['professional'];
      person: BaseUser['personal'];
      type: IUserKey;
      otherUsers: IOtherUser[];
      my_target:
        | {
            current_units: number;
            target: IProductCard;
          }
        | undefined;
    }
  | {
      publicKey: undefined;
      authed: false;
      errorOnAuth: boolean;
      data: undefined;
      person: undefined;
      type: undefined;
      otherUsers: [];
      my_target: undefined;
    };

const initialState: InitialType = {
  publicKey: undefined,
  authed: false,
  errorOnAuth: false,
  data: undefined,
  person: undefined,
  type: undefined,
  otherUsers: [],
  my_target: undefined,
};

const getTeamImageByName = (name: string, defaultImage: string) => {
  switch (name) {
    case 'Ира':
      return image_2;
    case 'Константин':
      return image_1;
    case 'Максим':
      return image_3;
    default:
      return defaultImage;
  }
};

const authSlice = createSlice({
  name: 'app/auth',
  initialState: initialState as InitialType,
  reducers: {
    setAuth(
      state,
      action: PayloadAction<{
        key: string;
        data: BaseUser['professional'];
        person: BaseUser['personal'];
        type: IUserKey;
        otherUsers: IOtherUser[];
      }>
    ) {
      state.publicKey = action.payload.key;
      state.data = action.payload.data;
      state.person = {
        ...action.payload.person,
        avatar: getTeamImageByName(
          action.payload.data.name,
          action.payload.person.avatar
        ),
      };
      state.type = action.payload.type;
      state.otherUsers = action.payload.otherUsers.map((el) => ({
        ...el,
        personal: {
          ...el.personal,
          avatar: getTeamImageByName(el.professional.name, el.personal.avatar),
        },
      }));
      state.authed = true;
      state.errorOnAuth = false;
    },
    logOut(state) {
      state.publicKey = undefined;
      state.authed = false;
      state.errorOnAuth = false;
      state.data = undefined;
      state.person = undefined;
      state.type = undefined;
      state.my_target = undefined;
      localStorage.clear();
    },
    setTarget(
      state,
      {
        payload,
      }: PayloadAction<{
        units: number;
        target: IProductCard;
      }>
    ) {
      state.my_target = {
        current_units: payload.units,
        target: payload.target,
      };
    },
    removeTarget(state) {
      state.my_target = undefined;
    },
  },
});

export const { setAuth, logOut, setTarget, removeTarget } = authSlice.actions;
export const appAuthReducer = authSlice.reducer;

export const useAuthState = () => useAppSelector((state) => state.auth);
