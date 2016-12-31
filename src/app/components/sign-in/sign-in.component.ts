import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'sign-in',
  styleUrls: ['./sign-in.component.css'],
  templateUrl: './sign-in.component.html'
})
export class SigninComponent {
  users: User[];
  constructor(private dataService: DataService) {
    this.dataService.getUsers().subscribe(users => { this.users = users; });
  }
}
