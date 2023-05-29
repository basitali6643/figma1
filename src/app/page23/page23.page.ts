import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page23',
  templateUrl: './page23.page.html',
  styleUrls: ['./page23.page.scss'],
})
export class Page23Page implements OnInit {
  currentItem = 'Television';
   array1:any=[{img:'../../assets/img26.jpg',name:'Roller Rabbit',price:'Price',amount:'190.00',Q:'Quantity',var:'1'},
   {img:'../../assets/img23.jpg',name:'Ziddi Xheikh',price:'Price',amount:'113.00',Q:'Quantity',var:1}
   
   ]
  constructor(public router:Router) { }

  ngOnInit() {
  }

  data(event:any){
    console.log(event);
    this.router.navigate(['./page25'],{state:{data:event}});

  }
}
