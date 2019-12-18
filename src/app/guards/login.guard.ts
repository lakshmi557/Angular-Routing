import { AuthService } from "./../services/auth.service";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class LoginGuard implements CanActivate {
  constructor(public authservice: AuthService, public router: Router) {}
  canActivate(): boolean {
    console.log("fun value", this.authservice.isAuthenticated())
    if (this.authservice.isAuthenticated()) {
      this.router.navigate([""]);
      return false;
    }
    return true;
  }
}