import { AxiosInstance } from 'axios';
import { IPersonal } from './person.types';

export const PersonApi = (axios: AxiosInstance) => ({
  getProfile: async () => {
    return axios.get<IPersonal>('/profile').then((r) => r.data);
  },
  getWallet: async (type: string, publicKey: string) => {
    return axios.get(`person/wallet/${type}/${publicKey}`);
  },
  getPersons: async () => {
    return axios.get('person');
  },
});
