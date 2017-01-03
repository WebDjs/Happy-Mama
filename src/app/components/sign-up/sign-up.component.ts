import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';
import { CreatorService } from '../../services/creator.service';
import { HashingService } from '../../services/hashing.service';
import { LocalStorageService } from '../../local-storage/index.js';
import { ValidatorService } from '../../services/validator.service';
import { ToasterService } from 'angular2-toastr/index';

@Component({
  moduleId: module.id,
  selector: 'sign-up',
  styleUrls: ['./sign-up.component.css'],
  templateUrl: './sign-up.component.html',
  providers: [LocalStorageService, HashingService, CreatorService, ValidatorService]
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
    private localStorage: LocalStorageService,
    private validator: ValidatorService,
    private notifier: ToasterService) {
    this.dataService.getUsers().subscribe(users => { this.users = users; });
  }

  registerUser(): void {
    this.newUser = this.creatorService.createUser();

    this.newUser.firstname = this.firstname;
    this.newUser.lastname = this.lastname;
    this.newUser.username = this.username;
    this.newUser.email = this.email;

    if (this.validator.stringNotInRange(this.username, 3, 13)) {
      this.notifier.error('Грешка!', 'Потребителското име трябва да е между 3 и 13 символа!', false, 3000);
      return;
    }

    if (this.validator.stringNotInRange(this.password, 6, 36)) {
      this.notifier.error('Грешка!', 'Паролата трябва да е между 6 и 36 символа!', false, 3000);
      this.password = '';
      this.passwordConfirm = '';
      return;
    }

    if (this.password.length !== this.passwordConfirm.length) {
      this.notifier.error('Грешка', 'Паролите не съвпадат!', true, 2000);
      return;
    } else {
      this.newUser.password = this.hashService.generateHash(this.password);

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
    }
  }
}
