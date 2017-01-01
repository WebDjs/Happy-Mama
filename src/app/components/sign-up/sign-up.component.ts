import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';
import { CreatorService } from '../../services/creator.service';
import { HashingService } from '../../services/hashing.service';

@Component({
  moduleId: module.id,
  selector: 'sign-up',
  styleUrls: ['./sign-up.component.css'],
  templateUrl: './sign-up.component.html',
  providers: [HashingService, CreatorService]
})
export class SignupComponent {
  users: User[];
  newUser: User;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;

  constructor(
    private dataService: DataService,
    private creatorService: CreatorService,
    private hashService: HashingService,
    private appRouter: Router) {
    this.dataService.getUsers().subscribe(users => { this.users = users; });
  }

  registerUser(): void {
    if (this.password === this.passwordConfirm) {
      this.newUser = this.creatorService.createUser();
      this.newUser.firstname = this.firstname;
      this.newUser.lastname = this.lastname;
      this.newUser.username = this.username;
      this.newUser.password = this.hashService.generateHash(this.password);
      this.newUser.email = this.email;

      console.log(this.newUser);

      this.dataService.addUser(this.newUser).subscribe(newUser => {
        this.users.push(newUser);

        // localStorage.clear();
        // localStorage.setItem('username', this.newUser.username);
        // localStorage.setItem('password', this.newUser.password);

        this.firstname = '';
        this.lastname = '';
        this.username = '';
        this.password = '';
        this.passwordConfirm = '';
        this.email = '';
        this.dataService.getUsers().subscribe(users => { this.users = users; });
        this.appRouter.navigateByUrl('home');
      });
    } else {
      console.log('PASSWORD ERROR!');
    }
  }
}
