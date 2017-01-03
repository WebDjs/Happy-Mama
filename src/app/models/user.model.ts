import { UserDetails } from './user.details.model';

export class User {
  _id: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  gender: string;
  image: string;
  isLogged: boolean;
  isBabysitter: boolean;
  details: UserDetails;
  createdOn: Date;
};
