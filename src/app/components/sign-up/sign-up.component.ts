import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';
import { HashingService } from '../../services/hashing.service';

@Component({
  moduleId: module.id,
  selector: 'sign-up',
  styleUrls: ['./sign-up.component.css'],
  templateUrl: './sign-up.component.html',
  providers: [HashingService]
})
export class SignupComponent {
  users: User[];
  newUser: User;
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;

  constructor(private dataService: DataService, private hashService: HashingService, private appRouter: Router) {
    this.dataService.getUsers().subscribe(users => { this.users = users; });
  }

  registerUser(): void {
    if (this.password === this.passwordConfirm) {
      this.newUser = new User();
      this.newUser.username = this.username;
      this.newUser.password = this.hashService.generateHash(this.password);
      this.newUser.email = this.email;

      console.log(this.newUser);

      this.dataService.addUser(this.newUser).subscribe(newUser => {
        this.users.push(newUser);
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
