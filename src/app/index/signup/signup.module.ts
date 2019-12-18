import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
import { signupRoute } from './signup.route';



@NgModule({
  declarations: [SignupComponent],
  exports: [SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(signupRoute)
  ]
})
export class SignupModule { }
