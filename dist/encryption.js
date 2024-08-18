"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enc_utf8_1 = __importDefault(require("crypto-js/enc-utf8"));
const aes_1 = __importDefault(require("crypto-js/aes"));
const murmurhash3_gc_1 = __importDefault(require("murmurhash-js/murmurhash3_gc"));
const utils_1 = require("./utils");
const getFingerprint = () => {
    const HASH_KEY = 'E86E2612010258B35137';
    const bar = '|';
    let key = '';
    const seed = 256;
    if (!(0, utils_1.isServer)()) {
        key += navigator.userAgent + bar;
        key += window.location.hostname + bar;
    }
    if (key.endsWith(bar)) {
        key = key.substring(0, key.length - 1);
    }
    return (0, utils_1.isServer)() ? HASH_KEY : (0, murmurhash3_gc_1.default)(key, seed) + HASH_KEY;
};
const EncryptionService = class {
    constructor() {
        this.secureKey = '';
        this.secureKey = getFingerprint();
    }
    encrypt(value) {
        return aes_1.default.encrypt(value, this.secureKey).toString();
    }
    decrypt(value) {
        try {
            const bytes = aes_1.default.decrypt(value, this.secureKey);
            return bytes.toString(enc_utf8_1.default) || null;
        }
        catch (ex) {
            return null;
        }
    }
};
exports.default = EncryptionService;
