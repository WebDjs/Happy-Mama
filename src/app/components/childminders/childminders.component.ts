import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'childminders',
  styleUrls: ['./childminders.component.css'],
  templateUrl: './childminders.component.html'
})
export class ChildmindersComponent implements OnInit {
  babysitters: any;
  name: string;
  age: string;
  image: string;
  constructor(private dataService: DataService) {
    this.dataService.getBabysitters().subscribe(babysitters => { this.babysitters = babysitters; });
  }

  ngOnInit() {

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
