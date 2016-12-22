import { NgModule } from '@angular/core'
import { RouterModule } from "@angular/router";
import { rootRouterConfig } from "./app.routes";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ChildmindersComponent } from './components/childminders/childminders.component';
import { ForumComponent } from './components/forum/forum.component';
import { SigninComponent } from './components/sign-in/sign-in.component';
import { SignupComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { FunComponent } from './components/fun/fun.component';
import { InfoComponent } from './components/info/info.component';
import { ListingsComponent } from './components/listings/listings.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildmindersComponent,
    ForumComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    FunComponent,
    InfoComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
