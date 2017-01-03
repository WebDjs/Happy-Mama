import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';
import { HashingService } from '../../services/hashing.service';
import { LocalStorageService } from '../../local-storage/index.js';
import { ToasterService } from 'angular2-toastr/index';

@Component({
  moduleId: module.id,
  selector: 'sign-in',
  styleUrls: ['./sign-in.component.css'],
  templateUrl: './sign-in.component.html',
  providers: [LocalStorageService]
})
export class SigninComponent {
  users: User[];
  newUser: User;
  username: string;
  password: string;
  constructor(
    private dataService: DataService,
    private hashService: HashingService,
    private localStorage: LocalStorageService,
    private notifier: ToasterService,
    private appRouter: Router) {
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  loginUser(): void {
    this.newUser = new User();
    this.newUser.username = this.username;
    this.newUser.password = this.hashService.generateHash(this.password);

    if (!(this.users.find(usr =>
      (usr.username === this.newUser.username) &&
      (usr.password === this.newUser.password)
    ))) {
      this.notifier.error('Грешка', 'Потребителското име или паролата не са правилни!', false, 3000);
      this.password = '';
      return;
    };

    localStorage.clear();
    localStorage.setItem('username', this.newUser.username);
    localStorage.setItem('password', this.newUser.password);
    localStorage.setItem('isLogged', 'true');

    this.appRouter.navigateByUrl('home');

    this.notifier.info('Добре дошли!', ' ', false, 1500);
  }
}
