import { AxiosInstance } from 'axios';
import { IPersonal } from './person.types';

import person_profile_mock from '../mocks/data/get_person.json';

export const PersonApi = (axios: AxiosInstance, mocks: boolean) => ({
  getProfile: async () => {
    if (mocks) {
      return (await person_profile_mock) as IPersonal;
    } else {
      return await axios.get<IPersonal>('/profile').then((r) => r.data);
    }
  },
  getWallet: async (type: string, publicKey: string) => {
    return axios.get(`person/wallet/${type}/${publicKey}`);
  },
});
