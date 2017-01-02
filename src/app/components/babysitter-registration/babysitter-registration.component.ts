import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'babysitter-registration',
  styleUrls: ['./babysitter-registration.component.css'],
  templateUrl: './babysitter-registration.component.html'
})
export class BabysitterRegistrationComponent {
  babysitters: any;
  name: string;
  age: string;
  image: string;
  constructor(private dataService: DataService) {
    this.dataService.getBabysitters().subscribe(babysitters => { this.babysitters = babysitters; });
  }

  addBabysitter(): void {
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
