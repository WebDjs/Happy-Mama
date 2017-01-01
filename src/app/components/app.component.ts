import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../services/data.service';
import { CreatorService } from './../services/creator.service';
import { LocalStorageService } from './../local-storage/index.js';

@Component({
  moduleId: module.id,
  selector: 'app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  providers: [DataService, CreatorService, LocalStorageService]
})
export class AppComponent {
  private userName: string;
  private isUserLogged: boolean = false;
  private isLanguageEnglish: boolean = false;
  private language: string = 'EN';
  constructor(
    private dataService: DataService,
    private localStorage: LocalStorageService,
    private appRouter: Router) { }

  getUserName(): string {
    this.userName = localStorage.getItem('username');
    if (this.userName) {
      return this.userName;
    }
    return 'Username';
  }

  isLogged(): boolean {
    let isLoggedAsString = localStorage.getItem('isLogged');
    if (isLoggedAsString) {
      this.isUserLogged = true;
    } else {
      this.isUserLogged = false;
    }
    return this.isUserLogged;
  }

  changeLanguage(): void {
    this.isLanguageEnglish = !this.isLanguageEnglish;
    if (this.isLanguageEnglish) {
      this.language = 'BG';
    } else {
      this.language = 'EN';
    }
  }

  logOut() {
    localStorage.clear();
    this.appRouter.navigateByUrl('/');
  }
}
