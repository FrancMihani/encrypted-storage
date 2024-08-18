import Cookies from 'js-cookie';
import { type StateStorage } from './types';

const cookiesStorage: StateStorage = {
  getItem(key: string): string | null {
    return Cookies.get(key) ?? null;
  },
  removeItem(key: string): void {
    Cookies.remove(key);
  },
  setItem(key: string, value: string) {
    Cookies.set(key, value);
  },
};

export default cookiesStorage;
