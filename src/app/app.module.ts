import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './reducers';
import { environment } from '../environments/environment';
import { LoginEffects } from './effects/login.effects';
import { UsersEffects } from './effects/user.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './containers/login/login.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { UsersComponent } from './containers/users/users.component';
import { UserComponent } from './containers/user/user.component';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { UserItemComponent } from './components/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    UserComponent,
    SpinnerComponent,
    UserItemComponent,
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      ...reducers,
      router: routerReducer,
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([LoginEffects, UsersEffects]),
    StoreRouterConnectingModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
