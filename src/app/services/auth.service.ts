  import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    const userdata = sessionStorage.getItem('userData');
    console.log('session storagedata', sessionStorage.getItem('userData'));
    if(userdata && userdata.length > 0){
      return true;
    }else{
      return false;
    }
  }

  public signup(postdata){ }

  public async login(postdata){
    const responsedata = {
      "name" : "Lakshmi",
      "id": "557",
      "token": "11731A0557"
    }
    await sessionStorage.setItem('userData',JSON.stringify(responsedata));
    return true;
  }

  public async getData(){
    const userdata = await sessionStorage.getItem('userData');
    return JSON.parse(userdata);
  }

  public async logout(){
await sessionStorage.removeItem('userData');
await sessionStorage.clear();
return true;
}
}
