"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_routes_1 = require('./app.routes');
var common_1 = require('@angular/common');
var index_js_1 = require('./local-storage/index.js');
// Pipes
var SortPipe_1 = require('./pipes/SortPipe');
var LatestPipe_1 = require('./pipes/LatestPipe');
var CategoryPipe_1 = require('./pipes/CategoryPipe');
// App components
var app_component_1 = require('./components/app.component');
var home_component_1 = require('./components/home/home.component');
var sign_in_component_1 = require('./components/sign-in/sign-in.component');
var sign_up_component_1 = require('./components/sign-up/sign-up.component');
var profile_component_1 = require('./components/profile/profile.component');
var childminders_component_1 = require('./components/childminders/childminders.component');
var babysitter_registration_component_1 = require('./components/babysitter-registration/babysitter-registration.component');
var listings_component_1 = require('./components/listings/listings.component');
var listing_item_component_1 = require('./components/listing-item/listing-item.component');
var add_form_component_1 = require('./components/add-form/add-form.component');
var forum_component_1 = require('./components/forum/forum.component');
var forum_comments_component_1 = require('./components/forum/forum-elements/forum-comments.component');
var forum_post_1 = require('./components/forum/forum-elements/forum.post');
var forum_comment_1 = require('./components/forum/forum-elements/forum.comment');
var fun_component_1 = require('./components/fun/fun.component');
var info_component_1 = require('./components/info/info.component');
// Services
var data_service_1 = require('./services/data.service');
var hashing_service_1 = require('./services/hashing.service');
var creator_service_1 = require('./services/creator.service');
var validator_service_1 = require('./services/validator.service');
var _1 = require('angular2-toastr/');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                sign_in_component_1.SigninComponent,
                sign_up_component_1.SignupComponent,
                childminders_component_1.ChildmindersComponent,
                babysitter_registration_component_1.BabysitterRegistrationComponent,
                profile_component_1.ProfileComponent,
                forum_component_1.ForumComponent,
                forum_comments_component_1.ForumCommentsComponent,
                fun_component_1.FunComponent,
                forum_comment_1.ForumComment,
                info_component_1.InfoComponent,
                listings_component_1.ListingsComponent,
                forum_post_1.ForumPost,
                add_form_component_1.AddFormComponent,
                listing_item_component_1.ListingItemComponent,
                _1.ToasterComponent,
                _1.ToastComponent,
                SortPipe_1.SortPipe,
                LatestPipe_1.LatestPipe,
                CategoryPipe_1.CategoryPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.rootRouterConfig),
                index_js_1.LocalStorageModule.withConfig({
                    prefix: 'app',
                    storageType: 'localStorage'
                })
            ],
            providers: [
                common_1.Location,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                data_service_1.DataService,
                hashing_service_1.HashingService,
                creator_service_1.CreatorService,
                validator_service_1.ValidatorService,
                _1.ToasterService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map