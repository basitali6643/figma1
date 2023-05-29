import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page17',
  templateUrl: './page17.page.html',
  styleUrls: ['./page17.page.scss'],
})
export class Page17Page implements OnInit {
 public address:any={street:'3512 Pearl Street',city:'Nagercoil'}
 public indexArray:any=[{img:'../../assets/img26.jpg',name:'shoes',text:'yes it is',price:100},
 {img:'../../assets/credit.jpg',name:'shirts',text:'yes it is',price:200},
 {img:'../../assets/img26.jpg',name:'jeans',text:'yes it is',price:300}]
 
  constructor( public router:Router) { }


  ngOnInit() {
  }
  next(){
    this.router.navigate(['./page5'])
  }

}
