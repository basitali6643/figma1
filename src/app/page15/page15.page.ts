import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-page15',
  templateUrl: './page15.page.html',
  styleUrls: ['./page15.page.scss'],
})
export class Page15Page implements OnInit {
   var:any=0;
 
// public tag:any='subtotal';
public rupees:any=0;
public discount:any=10;
public shipping:any=200;
public grandtotal:any=0;

  public  cardData:any=[];
  constructor(public router:Router,public global:GlobalService) { }

  ngOnInit() {
    
   this.global.fun.subscribe(res=>{
    this.var=res;
    console.log(this.var)
   })

   this.global.get.subscribe(res=>{
    this.cardData=res;
    console.log(this.cardData)
    this.cal();  
       })

  }

  cal(){

    this.rupees= 0;
    this.grandtotal=0;
  this.shipping=200;
    this.discount=10;
    
   for(let i=0; i<this.cardData.length; i++){
     this.cardData[i].subtotal= this.cardData[i].price* this.cardData[i].quantity
      console.log(this.cardData[i].subtotal);
      
  this.rupees=this.cardData[i].subtotal+this.rupees;
  console.log(this.rupees)
  this.discount=(this.rupees*10)/100;
  this.grandtotal=this.shipping+(this.rupees-(this.rupees*10)/100);
  console.log(this.grandtotal)
  }
  }
    Inc(i:any){
      this.cardData[i].quantity++;
    
      this.cal();
  } 
  dec(i:any){
    if(this.cardData[i].quantity>0){
      this.cardData[i].quantity--
    }
   
  
    this.cal();
     
  }
  next(){
    this.router.navigate(['./page20'])
    
  }
next1(){
  this.router.navigate(['./page9'])
}
  }
  




