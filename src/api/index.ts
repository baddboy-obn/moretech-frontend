import axios, { AxiosInstance } from 'axios';
import { PersonApi } from './person';

class API {
  private baseUrl: string = 'http://89.108.81.4:3000/';

  private instance: AxiosInstance = axios.create({
    baseURL: this.baseUrl,
  });

  public personMethods = PersonApi(this.instance);
}

export const webAPI = new API();
