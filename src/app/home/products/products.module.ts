import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { productRoute } from './products.route';



@NgModule({
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoute)
  ]
})
export class ProductsModule { }
