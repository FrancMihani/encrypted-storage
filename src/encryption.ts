import Utf8 from 'crypto-js/enc-utf8';
import AES from 'crypto-js/aes';
import murmurhash3_32_gc from 'murmurhash-js/murmurhash3_gc';
import { isServer } from "./utils";

const getFingerprint = () => {
  const HASH_KEY = 'E86E2612010258B35137';
  const bar = '|';
  let key = '';
  const seed = 256;

  if (!isServer()) {
    key += navigator.userAgent + bar;
    key += window.location.hostname + bar;
  }

  if (key.endsWith(bar)) {
    key = key.substring(0, key.length - 1);
  }

  return isServer() ? HASH_KEY : murmurhash3_32_gc(key, seed) + HASH_KEY;
};

const EncryptionService = class {
  secureKey = '';

  constructor() {
    this.secureKey = getFingerprint();
  }

  encrypt(value: string) {
    return AES.encrypt(value, this.secureKey).toString();
  }

  decrypt(value: string) {
    try {
      const bytes = AES.decrypt(value, this.secureKey);
      return bytes.toString(Utf8) || null;
    } catch (ex) {
      return null;
    }
  }
};

export default EncryptionService;
