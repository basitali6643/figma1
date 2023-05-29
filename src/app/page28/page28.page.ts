import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page28',
  templateUrl: './page28.page.html',
  styleUrls: ['./page28.page.scss'],
})
export class Page28Page implements OnInit {
img:any='../../assets/img10.jpg';
public seat:any=[ {text:'2 Seats'}, {text:'3 Seats'},{text:'4 Seats'},{text:'5 Seats'},{text:'6 Seats'}]
public tms:any=[{text:'Manual'},{text:'Automatic'}]
public color:any=[{color:'danger'},{color:'dark'},{color:'primary'}, {color:'light'},{color:'disabled'},{color:'warning'}]
arrange1:any=[{text:'High Sales'},{text:'A-Z'},{text:'Z-A'}]
selectcolor:any=0;
 public selectseat:any=0; 
 public selecttms:any;
 arrangeselect:any;
  constructor( ) { 
    
  }

  ngOnInit() {

  } 
  slideOpts = {
    slidesPerView: 3.3,    spacebetween: 0,

  }
  trans={
    slidesPerView: 2,    spacebetween: 0,

  }
  arrange={
    slidesPerView: 3,    spacebetween: 0,
  }
  

seatselect(item:any){
this.selectseat=item;
console.log(this.selectseat)
}
transselect(item:any){
  this.selecttms=item;
  console.log(this.selecttms)
}
colorselect(item:any){
  this.selectcolor=item;
  console.log(this.selectcolor)
}
selectarrange(item:any){
  this.arrangeselect=item;
  console.log(this.arrangeselect)
}
}