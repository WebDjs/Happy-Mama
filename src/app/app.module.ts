import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { LocationStrategy, Location, HashLocationStrategy } from '@angular/common';
import { LocalStorageModule } from './local-storage/index.js';

// App components
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';

import { SigninComponent } from './components/sign-in/sign-in.component';
import { SignupComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ChildmindersComponent } from './components/childminders/childminders.component';
import { BabysitterRegistrationComponent } from'./components/babysitter-registration/babysitter-registration.component';

import { ListingsComponent } from './components/listings/listings.component';
import { ListingItemComponent } from './components/listing-item/listing-item.component';
import { AddFormComponent } from './components/add-form/add-form.component';

import { ForumComponent } from './components/forum/forum.component';
import { ForumPost } from './components/forum/forum-elements/forum.post';

import { FunComponent } from './components/fun/fun.component';
import { InfoComponent } from './components/info/info.component';

// Services
import { DataService } from './services/data.service';
import { HashingService } from './services/hashing.service';
import { CreatorService } from './services/creator.service';
import { ValidatorService } from './services/validator.service';
import { ToasterComponent, ToastComponent, ToasterService } from 'angular2-toastr/';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ChildmindersComponent,
    BabysitterRegistrationComponent,
    ProfileComponent,
    ForumComponent,
    FunComponent,
    InfoComponent,
    ListingsComponent,
    ForumPost,
    AddFormComponent,
    ListingItemComponent,
    ToasterComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig),
    LocalStorageModule.withConfig({
      prefix: 'app',
      storageType: 'localStorage'
    })
  ],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    DataService,
    HashingService,
    CreatorService,
    ValidatorService,
    ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
