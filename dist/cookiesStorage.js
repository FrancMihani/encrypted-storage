"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const js_cookie_1 = __importDefault(require("js-cookie"));
const cookiesStorage = {
    getItem(key) {
        var _a;
        return (_a = js_cookie_1.default.get(key)) !== null && _a !== void 0 ? _a : null;
    },
    removeItem(key) {
        js_cookie_1.default.remove(key);
    },
    setItem(key, value) {
        js_cookie_1.default.set(key, value);
    },
};
exports.default = cookiesStorage;
