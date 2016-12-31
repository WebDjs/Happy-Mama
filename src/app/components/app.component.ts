import { Component } from '@angular/core';
import { DataService } from './../services/data.service';
import { LogInService } from './../services/login.service';

@Component({
  moduleId: module.id,
  selector: 'app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  providers: [DataService, LogInService]
})
export class AppComponent {
  private userName: string;
  private isUserLogged: boolean;
  private isLanguageEnglish: boolean;
  private language: string;
  constructor(private dataService: DataService, private logInService: LogInService) {
    this.userName = this.logInService.getUserData().currentUserName;
    this.isUserLogged = this.logInService.getUserData().isLoggedUser;
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
