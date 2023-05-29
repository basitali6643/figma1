import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../service/apicall.service';
import { GlobalService } from '../service/global.service';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
storedata:any;
  constructor( public router:Router,public apicall:ApicallService,public global: GlobalService) { }

  ngOnInit() {
   
  }
 async next(){
   await  this.apicall.api_getmonthdata();
   await this.global.getcall.subscribe(res=> {
      this.storedata = res;
     
    });
   await console.log(this.storedata);
    }

}
