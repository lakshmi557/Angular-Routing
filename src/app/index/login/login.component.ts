import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public postData = {
    email: "",
    password: ""
  };

  public errorText: string;

  constructor(public authService: AuthService, public router: Router) {
    this.errorText = '';
  }

  ngOnInit() {}

  loginAction(){
    if(this.postData.email && this.postData.password){
      if(this.authService.login(this.postData)){
        this.router.navigate(['']);
      }
    }else{
      this.errorText = "Please enter valid credentials"
    }
    console.log("postdata values", this.postData)
  }
}
