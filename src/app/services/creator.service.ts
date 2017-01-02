import { Injectable } from '@angular/core';
import { User } from './../models/user.model';
import { Nav } from './../models/nav.model';

@Injectable()
export class CreatorService {

  constructor() { }

  createNav(): Nav {
    const newNav = new Nav();

    return newNav;
  }

  createUser(firstname = '', lastname = '', username = '', password = '', email = ''): User {
    const newUser = new User();
    newUser.firstname = firstname;
    newUser.lastname = lastname;
    newUser.username = username;
    newUser.password = password;
    newUser.email = email;
    newUser.isBabysitter = false;
    newUser.createdOn = new Date();

    return newUser;
  }
}
