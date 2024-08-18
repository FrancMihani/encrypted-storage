"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookiesStorage = exports.cookiesSecureStorage = exports.localSecureStorage = void 0;
var localSecureStorage_1 = require("./localSecureStorage");
Object.defineProperty(exports, "localSecureStorage", { enumerable: true, get: function () { return __importDefault(localSecureStorage_1).default; } });
var cookiesSecureStorage_1 = require("./cookiesSecureStorage");
Object.defineProperty(exports, "cookiesSecureStorage", { enumerable: true, get: function () { return __importDefault(cookiesSecureStorage_1).default; } });
var cookiesStorage_1 = require("./cookiesStorage");
Object.defineProperty(exports, "cookiesStorage", { enumerable: true, get: function () { return __importDefault(cookiesStorage_1).default; } });
