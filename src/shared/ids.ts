const { customAlphabet } = require('nanoid');
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export const APPID_REGEX = /^[0-9A-Za-z]{5}$/;

export const createId = customAlphabet(alphabet, 5);