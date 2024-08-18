import { type StateStorage } from './types';
import CryptoService from './encryption';
import { isServer } from './utils';

const localSecureStorage: StateStorage = {
  getItem: (key: string) => {
    const cryptoService = new CryptoService();

    return !isServer()
      ? localStorage.getItem(key)
        ? cryptoService.decrypt(localStorage.getItem(key) ?? '')
        : ''
      : '';
  },
  setItem: (key: string, value: string) => {
    const cryptoService = new CryptoService();
    if (!isServer()) {
      localStorage.setItem(key, cryptoService.encrypt(value) ?? '');
    }
  },
  removeItem: (key: string) =>
    !isServer() ? localStorage.removeItem(key) : undefined,
};

export default localSecureStorage;
