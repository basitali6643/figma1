import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../service/apicall.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router:Router , public apicall:ApicallService) {}
next(){
  this.apicall.api_getdata();
  this.router.navigate(['./page1'])
}
}
