import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';


const routes: Routes = [
  {path:'reset',component:ResetPasswordComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot',component:LoginComponent},
  {path:'signup',component:SignUpComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule {
}
