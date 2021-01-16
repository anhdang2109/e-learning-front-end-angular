import {Role} from "./role";

export class User {
  id?: number;
  username?: string;
  password?: string;
  email?: string;
  gender?: string;
  phone?: string;
  title?: string;
  imageSource?: string;
  token?: string;
  isDeleted?: number;
  createdAt?: any;
  updatedAt?: any;
  // roles: Role[];
}
