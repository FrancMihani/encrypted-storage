import { type StateStorage } from './types';
import cookiesStorage from './cookiesStorage';
import CryptoService from './encryption';

const cookiesSecureStorage: StateStorage = {
  getItem: (key: string) => {
    const cryptoService = new CryptoService();

    return cookiesStorage.getItem(key)
      ? cryptoService.decrypt(cookiesStorage.getItem(key) as string)
      : '';
  },
  removeItem(key: string): void {
    cookiesStorage.removeItem(key);
  },
  setItem(key: string, value: string) {
    const cryptoService = new CryptoService();
    cookiesStorage.setItem(key, cryptoService.encrypt(value) ?? '');
  },
};

export default cookiesSecureStorage;
