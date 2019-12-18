// import { DashboardModule } from './dashboard/dashboard.module';
import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../guards/auth.guard';
import { SettingsModule } from './settings/settings.module';

export const HomeRoutes: Route[] = [
    {path: '', component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
        {path: '', loadChildren: () => import('../home/dashboard/dashboard.module')
        .then(res => res.DashboardModule)},
        {path: 'settings', loadChildren: () => import('../home/settings/settings.module')
        .then(res => res.SettingsModule)},
        {path: 'product', loadChildren: ()=> import('../home/products/products.module')
    .then(res => res.ProductsModule)},
    // {path: '', loadChildren: 'app/home/dashboard/dashboard.module#DashboardModule'},
    // {path: 'settings', loadChildren: 'app/home/settings/settings.module#SettingsModule'},
    // {path: 'product', loadChildren: 'app/home/product/product.module#ProductsModule'}
]}
]