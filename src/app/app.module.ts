import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhoneCodeComponent } from './phone-code/phone-code.component';
import {AuthGuard} from './auth.guard';
import {StudentService} from './student.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { ModulehubComponent } from './modulehub/modulehub.component';
import { ChatspaceComponent } from './chatspace/chatspace.component';
import { ChatpageComponent } from './chatpage/chatpage.component';

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent},
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'modules',
    component: ModulehubComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'chatspace',
    component: ChatspaceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'chatpage',
    component: ChatpageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'phone-code', component: PhoneCodeComponent },
  { path: '',
    redirectTo: '/signup',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    PhoneCodeComponent,
    ModulehubComponent,
    ChatspaceComponent,
    ChatpageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [StudentService, AuthGuard,
    {
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
