import { UserDetails } from './user.details.model';

export class User {
  _id: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  image: string;
  isLogged: boolean;
  isBabysitter: boolean;
  details: UserDetails;
  createdOn: Date;
};
