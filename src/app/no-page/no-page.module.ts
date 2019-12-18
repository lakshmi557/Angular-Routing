import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoPageComponent } from './no-page.component';
import { NoPageRoutes } from './no-page.route';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NoPageComponent],
  exports: [NoPageComponent],
  imports: [
    CommonModule,
    FormsModule
    // RouterModule.forChild(NoPageRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NoPageModule { }
