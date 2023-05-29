import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../service/global.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page29',
  templateUrl: './page29.page.html',
  styleUrls: ['./page29.page.scss'],
})
export class Page29Page implements OnInit {
 public product:any=[];
  constructor( public global:GlobalService,public router:Router ) { }

  ngOnInit() {
    // this.global.store.subscribe(res=>{
    //   this.product=res;
    // })  
    // console.log(this.product)

    this.global.store.subscribe(res=>{
      this.product=res;
      console.log(this.product)
         })
  }
  next(item:any){
    // this.global.set_page14(item)
this.router.navigate(['./page14'],    { state: { data: item } })
  }
  
}
