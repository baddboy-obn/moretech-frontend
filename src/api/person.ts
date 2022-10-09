import { AxiosInstance } from 'axios';
import { IPersonal } from './person.types';

export type IUserKey = 'teamlead' | 'personal' | 'manager';

export interface BaseUser {
  publicKey: string;
  professional: {
    department: string;
    lastname: string;
    manager: string;
    mentor: string;
    name: string;
    position: string;
  };
  personal: {
    about: string;
    avatar: string;
    birthdate: string;
    id: string | number;
  };
}

export type IFetchedUsers = Record<string, BaseUser>;

export interface IWalletResponse {
  any: string;
}

export const PersonApi = (axios: AxiosInstance) => ({
  getProfile: async () => {
    return axios.get<IPersonal>('/profile').then((r) => r.data);
  },
  getWallet: async (type: IUserKey, publicKey: string) => {
    return axios.get<IWalletResponse>(`person/wallet/${type}/${publicKey}`);
  },
  getPersons: async () => {
    return axios.get<IFetchedUsers>('person');
  },
});
