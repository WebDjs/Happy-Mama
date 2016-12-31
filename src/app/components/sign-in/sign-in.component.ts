import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';
import { HashingService } from '../../services/hashing.service';
import { LogInService } from '../../services/login.service';
// import { LocalStorageService } from 'angular-2-local-storage/src/local-storage.service.js';

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
  constructor(
    private dataService: DataService,
    private hashService: HashingService,
    private appRouter: Router,
    private logInService: LogInService) {
    this.dataService.getUsers().subscribe(users => { this.users = users; });
  }

  loginUser(): void {
    this.newUser = new User();
    this.newUser.username = this.username;
    this.newUser.password = this.hashService.generateHash(this.password);

    // localStorage.clear();
    // localStorage.setItem('username', this.newUser.username);
    // localStorage.setItem('password', this.newUser.password);

    this.logInService.saveUserName(this.newUser.username);
    console.log(this.newUser);

    this.appRouter.navigateByUrl('/');
  }
}
