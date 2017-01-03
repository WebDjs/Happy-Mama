import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Babysitter } from '../../models/babysitter.model';
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
  babysitters: Babysitter[];
  babysitter: Babysitter;
  name: string;
  age: string;
  image: string;
  constructor(
    private dataService: DataService,
    private creatorService: CreatorService,
    private appRouter: Router,
    private validator: ValidatorService,
    private notifier: ToasterService) {
    this.dataService.getBabysitters().subscribe(babysitters => { this.babysitters = babysitters; });
  }

  addBabysitter(): void {
    this.babysitter = new Babysitter();

    let newBabysitter = {
      name: this.name,
      age: this.age,
      image: this.image
    };

    this.dataService.addBabysitter(newBabysitter).subscribe(babysitter => {
      this.babysitters.push(babysitter);
      this.name = '';
      this.age = '';
      this.image = '';
      this.dataService.getBabysitters().subscribe(babysitters => { this.babysitters = babysitters; });
    });
  }
}
