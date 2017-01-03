import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';
import { CreatorService } from '../../services/creator.service';
import { ValidatorService } from '../../services/validator.service';
import { ToasterService } from 'angular2-toastr/index';

@Component({
  moduleId: module.id,
  selector: 'profile',
  styleUrls: ['./profile.component.css'],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  currentUser: User;
  constructor(
    private dataService: DataService,
    private creatorService: CreatorService,
    private appRouter: Router,
    private validator: ValidatorService,
    private notifier: ToasterService) {
    this.currentUser = new User();
    this.currentUser.image = './assets/images/emptyProfile.jpg';

  }

  Image(): string {
    return this.currentUser.image;
  }
}
