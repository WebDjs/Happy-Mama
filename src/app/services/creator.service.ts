import { Injectable } from '@angular/core';
import { User } from './../models/user.model';

@Injectable()
export class CreatorService {

  constructor() { }

  createUser(firstname = '', username = '', lastname = '', password = '', email = ''): User {
    const newUser = new User();
    newUser.username = username;
    newUser.password = password;
    newUser.email = email;
    newUser.isBabysitter = false;
    newUser.createdOn = new Date();

    return newUser;
  }
}
