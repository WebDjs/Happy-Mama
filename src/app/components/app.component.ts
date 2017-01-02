import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../services/data.service';
import { CreatorService } from './../services/creator.service';
import { LocalStorageService } from './../local-storage/index';
import { ToasterService } from 'angular2-toastr/index';
import { Nav } from '../models/nav.model';

@Component({
  moduleId: module.id,
  selector: 'app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  providers: [DataService, CreatorService, LocalStorageService, ToasterService]
})
export class AppComponent implements OnInit {
  private nav: Nav;
  private userName: string;
  private isUserLogged: boolean = false;
  private isLanguageEnglish: boolean = false;
  private language: string = 'EN';
  constructor(
    private dataService: DataService,
    private creatorService: CreatorService,
    private localStorage: LocalStorageService,
    private notifier: ToasterService,
    private appRouter: Router) {
  }

  ngOnInit() {
    this.nav = new Nav();
    this.nav.logo = 'Dетегледачките';
    this.nav.signIn = 'Вход';
    this.nav.signOut = 'Изход';
    this.nav.signUp = 'Регистрация';
    this.nav.home = false;
    this.nav.babisitters = 'Dетегледачки';
    this.nav.listungs = 'Обяви';
    this.nav.forum = 'Форум';
    this.nav.info = 'Полезна информация';
    this.nav.fun = 'Забавно';
    this.nav.search = 'Търсене...';
  }

  getNav() {
    return this.nav;
  }

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

  getHome() {
    return this.nav.home;
  }

  changeLanguage(): void {
    this.isLanguageEnglish = !this.isLanguageEnglish;
    if (this.isLanguageEnglish) {
      this.language = 'BG';
      this.nav.logo = 'TheBabysitters';
      this.nav.signIn = 'SignIn';
      this.nav.signOut = 'SignOut';
      this.nav.signUp = 'SignUp';
      this.nav.home = true;
      this.nav.babisitters = 'Babysitters';
      this.nav.listungs = 'Listings';
      this.nav.forum = 'Forum';
      this.nav.info = 'Info';
      this.nav.fun = 'Fun';
      this.nav.search = 'Search...';
    } else {
      this.language = 'EN';
      this.nav = new Nav();
      this.nav.logo = 'Dетегледачките';
      this.nav.signIn = 'Вход';
      this.nav.signOut = 'Изход';
      this.nav.signUp = 'Регистрация';
      this.nav.home = false;
      this.nav.babisitters = 'Dетегледачки';
      this.nav.listungs = 'Обяви';
      this.nav.forum = 'Форум';
      this.nav.info = 'Полезна информация';
      this.nav.fun = 'Забавно';
      this.nav.search = 'Търсене...';
    }
  }

  logOut() {
    localStorage.clear();
    this.notifier.warning('Довиждане!', 'Заповядайте пак!', false, 1500);
    this.appRouter.navigateByUrl('/');
  }
}
