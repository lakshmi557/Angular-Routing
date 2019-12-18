import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authservice: AuthService, public router: Router){}

  canActivate(): boolean{ 
    console.log('IsAuth fun value', this.authservice.isAuthenticated());
    if(!this.authservice.isAuthenticated())
    {
      this.router.navigate(['login']);
      return false;
    }
    return true;  }
  
}
