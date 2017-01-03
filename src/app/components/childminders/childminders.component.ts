import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'childminders',
  styleUrls: ['./childminders.component.css'],
  templateUrl: './childminders.component.html'
})
export class ChildmindersComponent {
  babysitters: any;
  name: string;
  age: string;
  image: string;
  constructor(private dataService: DataService) {
    this.dataService.getBabysitters().subscribe(babysitters => { this.babysitters = babysitters; });
  }
}
