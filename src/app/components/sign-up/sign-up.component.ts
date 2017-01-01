import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';
import { CreatorService } from '../../services/creator.service';
import { HashingService } from '../../services/hashing.service';
import { LocalStorageService } from '../../local-storage/index.js';
import { ToasterService } from 'angular2-toastr/index';

@Component({
  moduleId: module.id,
  selector: 'sign-up',
  styleUrls: ['./sign-up.component.css'],
  templateUrl: './sign-up.component.html',
  providers: [LocalStorageService, HashingService, CreatorService]
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
    private appRouter: Router,
    private notifier: ToasterService,
    private localStorage: LocalStorageService) {
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

      if (this.newUser.username.length < 3 || this.newUser.username.length > 13) {
          this.notifier.error('Грешка!', 'Потребителското име трябва да е между 3 и 13 символа!', false, 3000);
      }

      this.dataService.addUser(this.newUser).subscribe(newUser => {
        this.users.push(newUser);

        console.log(this.newUser + 'registered!');

        localStorage.clear();
        localStorage.setItem('username', this.newUser.username);
        localStorage.setItem('password', this.newUser.password);
        localStorage.setItem('isLogged', 'true');

        this.firstname = '';
        this.lastname = '';
        this.username = '';
        this.password = '';
        this.passwordConfirm = '';
        this.email = '';
        this.dataService.getUsers().subscribe(users => { this.users = users; });
        this.appRouter.navigateByUrl('home');
        this.notifier.info('Добре дошли!', ' ', false, 1500);
      });
    } else {
      this.notifier.error('Грешка', 'Паролите не съвпадат!', true, 2000);
    }
  }
}
