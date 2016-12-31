import { UserDetails } from './user.details.model';

export class User {
  _id: String;
  username: String;
  password: String;
  email: String;
  firstName: String;
  lastName: String;
  age: Number;
  gender: String;
  image: String;
  isLogged: Boolean;
  isBabysitter: Boolean;
  details: UserDetails;
  createdOn: Date;
};
