import { Component, OnInit } from '@angular/core';
 
import { Router } from '@angular/router';
@Component({
  selector: 'app-page27',
  templateUrl: './page27.page.html',
  styleUrls: ['./page27.page.scss'],
})
export class Page27Page implements OnInit {
  array:any=[{img:'../../assets/img26.jpg',name:'Roller Rabbit',price:10,quantity:1,subtotal:'' },
  {img:'../../assets/img26.jpg',name:'Roller Rabbit',price:20,quantity:1,subtotal:'' }
 
]
 
 
  constructor( public router:Router) { }

  ngOnInit() {
  }

  next(item:any){
    console.log(item);
    this.router.navigate(['./page25'],{state:{data:item}});

  }

}
