import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataProvider} from "../providers/data/data";
import {AuthserviceService} from "../providers/authservice.service";
import {Router} from "@angular/router" 

@Component({
  selector: 'app-luces',
  templateUrl: './luces.page.html',
  styleUrls: ['./luces.page.scss'],
})
export class LucesPage implements OnInit {

  constructor(private router:Router, private httpClient: HttpClient, private dataService: DataProvider, private authService: AuthserviceService) { }

  prender(){
    this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/housedata','{userId:"tob447","deviceName":"a1",luz":{"accion":"1"}}').subscribe(
      data=>{console.log(data);},
      error => console.log(error)
    );
  }

  apagar(){
    this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/housedata','{userId:"tob447","deviceName":"a1",luz":{"accion":"0"}}').subscribe(
      data=>{console.log(data);},
      error => console.log(error)
    );
  }

  logOut(){
    //this.authService.logOut();
    this.router.navigate(['/home']);

  }

  ngOnInit() {
  }

}
