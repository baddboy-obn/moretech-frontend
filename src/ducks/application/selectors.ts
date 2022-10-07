import { useAppSelector } from '../index';

export const useThemeSelector = () =>
  useAppSelector((state) => state.application.theme);
