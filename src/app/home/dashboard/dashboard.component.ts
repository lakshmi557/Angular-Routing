import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public userData : any;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.getData().then(data => {
      console.log('printing fro dashboard',data);
      this.userData = data;
    });
  }  
}
