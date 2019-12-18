import { forgotRoute } from './forgot.route';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotComponent } from './forgot.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ForgotComponent],
  exports: [ForgotComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(forgotRoute)
  ]
})
export class ForgotModule { }
