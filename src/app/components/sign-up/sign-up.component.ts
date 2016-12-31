import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';


@Component({
  moduleId: module.id,
  selector: 'sign-up',
  styleUrls: ['./sign-up.component.css'],
  templateUrl: './sign-up.component.html'
})
export class SignupComponent {
  users: User[];
  newUser: User;
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;
  constructor(private dataService: DataService) {
    this.dataService.getUsers().subscribe(users => { this.users = users; });
  }

  registerUser(): void {
    this.newUser.username = this.username;
    this.newUser.password = this.password;
    this.newUser.email = this.email;

    if (this.newUser.password === this.passwordConfirm) {
      this.dataService.addUser(this.newUser).subscribe(newUser => {
        this.users.push(newUser);
        this.username = '';
        this.password = '';
        this.email = '';
        this.dataService.getUsers().subscribe(users => { this.users = users; });
      });
    }
    else {
      console.log('PASSWORD ERROR!');
    }
  }
}
