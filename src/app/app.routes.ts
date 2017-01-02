import { Routes } from '@angular/router';

// Components
import { SigninComponent } from './components/sign-in/sign-in.component';
import { SignupComponent } from './components/sign-up/sign-up.component';
import { ChildmindersComponent } from './components/childminders/childminders.component';
import { ForumComponent } from './components/forum/forum.component';
import { ForumThemeComponent } from './components/forum/forum-elements/forum.theme';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ListingsComponent } from './components/listings/listings.component';
import { FunComponent } from './components/fun/fun.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddFormComponent } from'./components/add-form/add-form.component';
import { BabysitterRegistrationComponent } from'./components/babysitter-registration/babysitter-registration.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'childminders', component: ChildmindersComponent },
  { path: 'new-babysitter', component: BabysitterRegistrationComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'fun', component: FunComponent },
  { path: 'info', component: InfoComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'listings/form', component: AddFormComponent },
  { path: 'profile', component: ProfileComponent }

];
