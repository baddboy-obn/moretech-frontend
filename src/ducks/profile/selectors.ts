import { useAppSelector } from '../index';

export const usePersonSelector = () =>
  useAppSelector((state) => state.profile.person);
