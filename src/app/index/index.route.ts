import { Route } from '@angular/router';
import { IndexComponent } from './index.component';
import { LoginGuard } from '../guards/login.guard';

export const IndexRoutes: Route[] = [
    {path: '', component: IndexComponent,
     canActivate: [LoginGuard],
     children: [
    {path: 'login', loadChildren: () =>    import('../index/login/login.module').
    then(m => m.LoginModule)},
    {path: 'signup', loadChildren: () =>    import('../index/signup/signup.module').
    then(m => m.SignupModule)},
    {path: 'forgot', loadChildren: () =>    import('../index/forgot/forgot.module').
    then(m => m.ForgotModule)},
    // loadChildren: 'app/index/login/login.module#LoginModule'},
    // {path: 'signup', loadChildren: 'app/index/signup/signup.module#SignupModule'},
    // {path: 'forgot', loadChildren: 'app/index/forgot/forgot.module#ForgotModule'}
]}
]   