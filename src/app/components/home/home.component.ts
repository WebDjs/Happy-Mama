import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  babysitters: any[];
  constructor(private dataService: DataService) {
    this.dataService.getBabysitters().subscribe(babysitters => this.babysitters = babysitters);
  }
}
