"use strict";
// Components
var sign_in_component_1 = require('./components/sign-in/sign-in.component');
var sign_up_component_1 = require('./components/sign-up/sign-up.component');
var childminders_component_1 = require('./components/childminders/childminders.component');
var forum_component_1 = require('./components/forum/forum.component');
var forum_comments_component_1 = require('./components/forum/forum-elements/forum-comments.component');
var home_component_1 = require('./components/home/home.component');
var info_component_1 = require('./components/info/info.component');
var listings_component_1 = require('./components/listings/listings.component');
var fun_component_1 = require('./components/fun/fun.component');
var profile_component_1 = require('./components/profile/profile.component');
var add_form_component_1 = require('./components/add-form/add-form.component');
var babysitter_registration_component_1 = require('./components/babysitter-registration/babysitter-registration.component');
exports.rootRouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'sign-in', component: sign_in_component_1.SigninComponent },
    { path: 'sign-up', component: sign_up_component_1.SignupComponent },
    { path: 'childminders', component: childminders_component_1.ChildmindersComponent },
    { path: 'new-babysitter', component: babysitter_registration_component_1.BabysitterRegistrationComponent },
    { path: 'forum', component: forum_component_1.ForumComponent },
    { path: 'comments', component: forum_comments_component_1.ForumCommentsComponent },
    { path: 'fun', component: fun_component_1.FunComponent },
    { path: 'info', component: info_component_1.InfoComponent },
    { path: 'listings', component: listings_component_1.ListingsComponent },
    { path: 'listings/form', component: add_form_component_1.AddFormComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent }
];
//# sourceMappingURL=app.routes.js.map