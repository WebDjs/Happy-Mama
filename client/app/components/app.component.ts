import {Component} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  moduleId: module.id,
  selector   : 'app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  providers: [DataService]
})
export class AppComponent {
}
