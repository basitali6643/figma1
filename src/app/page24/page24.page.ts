import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-page24',
  templateUrl: './page24.page.html',
  styleUrls: ['./page24.page.scss'],
})

export class Page24Page implements OnInit {
//   array:any=[{img:'../../assets/img26.jpg',name:'Roller Rabbit',price:10,quantity:1,subtotal:'' },
//   {img:'../../assets/img26.jpg',name:'Roller Rabbit',price:20,quantity:1,subtotal:'' }
 
// ]
dataarray:any=[];

public tag:any='subtotal';
public rupees:any=0;
public discount:any=10;
public shipping:any=200;
public grandtotal:any=0;


  constructor(public dataservice:DataService) { }
getData(){
  this.dataservice.getData().subscribe(data =>{
    this.dataarray = data
  })
}
  ngOnInit() {
    this.cal();
this.getData() 
  }

//   increment(item:any) {
//      item.var++
//       item.P=item.var*item.amount
     
// console.log(item.var)
//   }
// decrement(item:any) {
// if(item.var>0) {
// item.var--
// }
//   console.log(item.var)
// }
// cal(item:any){
//   if(item.var++==0){
//     this.rupees=item.amount
//   }
//   else if(item.var>0){
// this.rupees=item.var*item.amount
//   }

//   console.log(this.rupees)

// }
//  dec(item:any) {
//   if(item.var>0){
//     item.var--
//     this.rupees=item.var*item.amount
//   }
//   console.log(this.rupees)
// }
cal(){
  this.rupees= 0;
  this.grandtotal=0;
this.shipping=200;
  this.discount=10;
  for(let i=0; i<this.dataarray.length; i++){
    this.dataarray[i].subtotal= this.dataarray[i].price* this.dataarray[i].quantity
    console.log(this.dataarray[i].subtotal);
    
this.rupees=this.dataarray[i].subtotal+this.rupees;
console.log(this.rupees)
// this.discount=(this.rupees*10)/100;
this.grandtotal=this.shipping+(this.rupees-(this.rupees*10)/100);
console.log(this.grandtotal)
  }
}
Inc(i:any){
     this.dataarray[i].quantity++;
     this.cal();
}
dec(i:any){
  if(this.dataarray[i].quantity>0){
    this.dataarray[i].quantity--
  }
  this.cal();
   
}

}

