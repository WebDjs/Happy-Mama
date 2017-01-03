import { Injectable } from '@angular/core';
import { User } from './../models/user.model';
import { Babysitter } from './../models/babysitter.model';
import { BabysitterDetails } from './../models/babysitter.details.model';
import { Like } from './../models/like.model';
import { Nav } from './../models/nav.model';

@Injectable()
export class CreatorService {

  constructor() { }

  createNav(): Nav {
    return new Nav();
  }

  createBabysitter(): Babysitter {
    let babysitter = new Babysitter();
    let babysitterDeatails = new BabysitterDetails();
    let like = new Like();

    like.number = 0;
    like.value = 1;
    like.valueMean = like.number / like.value;

    babysitter.babysitterDetails = babysitterDeatails;
    babysitter.likes = like;

    return babysitter;
  }

  createUser(): User {
    const newUser = new User();
    newUser.isBabysitter = false;
    newUser.createdOn = new Date();

    return newUser;
  }
}
