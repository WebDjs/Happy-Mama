import { Routes } from '@angular/router';
import { ChildmindersComponent } from './childminders/childminders.component';
import { ForumComponent } from './forum/forum.component';
import { SigninComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { FunComponent } from './fun/fun.component';
import { InfoComponent } from './info/info.component';
import { ListingsComponent } from './listings/listings.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'childminders', component: ChildmindersComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'fun', component: FunComponent },
  { path: 'info', component: InfoComponent },
  { path: 'listings', component: ListingsComponent }
];
