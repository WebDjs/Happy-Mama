import { Injectable } from '@angular/core';
import { User } from './../models/user.model';
import { Babysitter } from './../models/babysitter.model';
import { Nav } from './../models/nav.model';

@Injectable()
export class CreatorService {

  constructor() { }

  createNav(): Nav {
    return new Nav();
  }

  createUser(): User {
    const newUser = new User();
    newUser.isBabysitter = false;
    newUser.createdOn = new Date();

    return newUser;
  }
}
