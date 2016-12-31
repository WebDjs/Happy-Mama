import { Component } from '@angular/core';
import { DataService } from './../services/data.service';
import { CreatorService } from './../services/creator.service';

@Component({
  moduleId: module.id,
  selector: 'app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  providers: [DataService, CreatorService]
})
export class AppComponent {
  private isLanguageEnglish: boolean;
  private language: string;
  constructor(private dataService: DataService) {
    this.isLanguageEnglish = false;
    this.language = 'EN';
  }

  changeLanguage(): void {
    this.isLanguageEnglish = !this.isLanguageEnglish;
    if (this.isLanguageEnglish) {
      this.language = 'BG';
    } else {
      this.language = 'EN';
    }
  }
}
