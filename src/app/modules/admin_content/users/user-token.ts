

import {Role} from "./role";

export interface UserToken {
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
  roles: Role[];
}
