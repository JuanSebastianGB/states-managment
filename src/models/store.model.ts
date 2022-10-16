import { User } from './user.model';

export interface AppStore {
  user: User;
}

export enum slicesTypes {
  USER = 'user',
}
