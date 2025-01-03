import bcrypt from 'bcrypt';
import {BCRYPT_ROUNDS} from '../config/constants';

export const hashPassword = async (password: string): Promise<string> => {
    return bcrypt.hash(password, BCRYPT_ROUNDS);
};

export const comparePasswords =(
    password: string,
    hashedPassword: string
  ): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
  };
  