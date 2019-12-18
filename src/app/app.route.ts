import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home.route';
import { IndexRoutes } from './index/index.route';
import { NoPageRoutes } from './no-page/no-page.route';

export const routes: Routes = [...HomeRoutes, ...IndexRoutes, ...NoPageRoutes]