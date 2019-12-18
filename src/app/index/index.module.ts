import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';



@NgModule({
  declarations: [IndexComponent],
  exports: [IndexComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class IndexModule { }
