import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, Location, HashLocationStrategy } from '@angular/common';
// import { LocalStorageModule } from 'angular-2-local-storage/src/local-storage.module.js';

// App components
import { AppComponent } from './components/app.component';

import { SigninComponent } from './components/sign-in/sign-in.component';
import { SignupComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ChildmindersComponent } from './components/childminders/childminders.component';
import { FunComponent } from './components/fun/fun.component';
import { InfoComponent } from './components/info/info.component';
import { ForumComponent } from './components/forum/forum.component';

import { ListingsComponent } from './components/listings/listings.component';
import { ForumPost } from './components/forum/forum-elements/forum.post';
import { ForumForm } from './components/forum/forum-elements/forum-post.form';
import { ListingItemComponent } from './components/listing-item/listing-item.component';
import { AddFormComponent } from './components/add-form/add-form.component';


// App Services
import { DataService } from './services/data.service';
import { HashingService } from './services/hashing.service';
import { LogInService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildmindersComponent,
    ProfileComponent,
    ForumComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    FunComponent,
    InfoComponent,
    ListingsComponent,
    ForumPost,
    ForumForm,
    AddFormComponent,
    ListingItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    LogInService,
    DataService,
    HashingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
