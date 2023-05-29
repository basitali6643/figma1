import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { GlobalService } from './global.service';
import { NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  response: any;
  data: any;

  // tslint:disable-next-line:max-line-length
  public user: any;
  gettransactions: any;
  getallacont: any;
  getAllNetbalance: any;
  getAllTransactionns: any;
  constructor(private router: Router, public menuCtrl: MenuController, private authservice: AuthService, private global: GlobalService, private navigate: NavController) { }
  api_insertdata(signin: any) {
    this.authservice.con(signin, 'insertdata').then(async (res) => {
      this.response = JSON.parse(String(res));

      if (this.response.error === false) {
        console.log(this.response);
       
       
        // this.navigate.navigateForward("/start");
        return;
      }
    
      console.log(this.response.error);
      // tslint:disable-next-line: whitespace


    }, (err) => {} ) ;
  }

  api_getdata() {
    this.authservice.getdata('getdaydata').then((result) => {
      this.data = JSON.parse(String(result));
     
     
      console.log(this.data,"data Updated");
    }, (err) => {

       console.log(err);
    });
  }
  
  api_getalldata() {
    this.authservice.getdata('getalldata').then((result) => {
      this.data = JSON.parse(String(result));
     this.global.set_pulldata(this.data)
     
      console.log(this.data,"data Updated");
    }, (err) => {

       console.log(err);
    });
  }
  
 async api_getmonthdata() {
   await this.authservice.getdata('getmonthdata').then((result) => {
      this.data = JSON.parse(String(result));
     this.global.set_getcall(this.data)
     
      console.log(this.data,"data Updated");
    }, (err) => {

       console.log(err);
    });
  }
  api_getdataa(signin: any) {
    this.authservice.con(signin, 'getdataa').then(async (res) => {
      this.response = JSON.parse(String(res));
      if (this.response.error === false) {
        console.log(this.response);
       
       
        // this.navigate.navigateForward("/start");
        return;
      }
    
      console.log(this.response.error);
      // tslint:disable-next-line: whitespace


    }, (err) => {} ) ;
  }

  api_updateappdata(signin: any) {
    this.authservice.con(signin, 'updateappdata').then(async (res) => {
      this.response = JSON.parse(String(res));
      if (this.response.error === false) {
        console.log(this.response);
       
       
        // this.navigate.navigateForward("/start");
        return;
      }
    
      console.log(this.response.error);
      // tslint:disable-next-line: whitespace


    }, (err) => {} ) ;
  }
 
  api_deleteappdata(signin: any) {
    this.authservice.con(signin, 'deleteappdata').then(async (res) => {
      this.response = JSON.parse(String(res));
      if (this.response.error === false) {
        console.log(this.response);
       
       
        // this.navigate.navigateForward("/start");
        return;
      }
    
      console.log(this.response.error);
      // tslint:disable-next-line: whitespace


    }, (err) => {} ) ;
  }
 
}