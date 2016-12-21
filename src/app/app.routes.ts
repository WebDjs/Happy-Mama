import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CollectionsComponent } from './collections/collections.component';
import { SigninComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'collections', component: CollectionsComponent }
];
