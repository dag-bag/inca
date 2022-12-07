/** @format */

export interface UserProp {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginUser {
  email: string;
  password: string;
  name?: string;
}
