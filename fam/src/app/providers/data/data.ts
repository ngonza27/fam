import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {interval} from "rxjs/observable/interval";
import {AuthserviceService} from "../../providers/authservice.service";


/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({ providedIn: 'root' })
export class DataProvider {
  request;
  dataObservable = interval(5000);

  energia: string;
  userInfo: any;

  constructor(private authService:AuthserviceService  ,private  httpClient: HttpClient) {  }

  returnData(){
    this.httpClient.get('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/housedata')
      .subscribe((data:any[]) => {
        this.request = data;
        this.energia = this.request['Temperature'];
      });
  }

  /*returnUserInfo(){
    const user={"userId":this.authService.getAuthenticatedUser()['username'],"action":"0"}
    this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/getinfo',user).subscribe(
        data=>{this.userInfo=data},
  
        error => {console.log(error)}
     );
  }*/
}
