import { Routes } from '@angular/router';

// Components
import { SigninComponent } from './components/sign-in/sign-in.component';
import { SignupComponent } from './components/sign-up/sign-up.component';
import { ChildmindersComponent } from './components/childminders/childminders.component';
import { ForumComponent } from './components/forum/forum.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ListingsComponent } from './components/listings/listings.component';
import { FunComponent } from './components/fun/fun.component';

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
