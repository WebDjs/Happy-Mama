import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';
import { HashingService } from '../../services/hashing.service';

@Component({
  moduleId: module.id,
  selector: 'sign-in',
  styleUrls: ['./sign-in.component.css'],
  templateUrl: './sign-in.component.html'
})
export class SigninComponent {
  users: User[];
  newUser: User;
  username: string;
  password: string;
  constructor(private dataService: DataService, private hashService: HashingService, private appRouter: Router) {
    this.dataService.getUsers().subscribe(users => { this.users = users; });
  }

  loginUser(): void {
    this.newUser = new User();
    this.newUser.username = this.username;
    this.newUser.password = this.hashService.generateHash(this.password);
    console.log(this.newUser);

    this.appRouter.navigateByUrl('home');
  }
}
