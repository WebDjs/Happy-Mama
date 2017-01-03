import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CreatorService } from '../../services/creator.service';
import { ValidatorService } from '../../services/validator.service';
import { ToasterService } from 'angular2-toastr/index';


@Component({
  moduleId: module.id,
  selector: 'babysitter-registration',
  styleUrls: ['./babysitter-registration.component.css'],
  templateUrl: './babysitter-registration.component.html'
})
export class BabysitterRegistrationComponent {
  babysitters: any;
  babysitter: any;
  name: string;
  age: string;
  image: string;
  email: string;
  constructor(
    private dataService: DataService,
    private creatorService: CreatorService,
    private appRouter: Router,
    private validator: ValidatorService,
    private notifier: ToasterService) {
    this.dataService.getBabysitters().subscribe(babysitters => { this.babysitters = babysitters; });
  }

  addBabysitter(): void {

    let newBabysitter = {
      name: this.name,
      age: this.age,
      image: this.image,
      email: this.email
    };

    this.dataService.addBabysitter(newBabysitter).subscribe(babysitter => {
      this.babysitters.push(babysitter);
      this.name = '';
      this.age = '';
      this.image = '';
      this.email = '';
      this.dataService.getBabysitters().subscribe(babysitters => { this.babysitters = babysitters; });

      this.appRouter.navigateByUrl('childminders');
    });
  }
}
