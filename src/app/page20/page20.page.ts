import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page20',
  templateUrl: './page20.page.html',
  styleUrls: ['./page20.page.scss'],
})
export class Page20Page implements OnInit {
      img:any='../../assets/img28.jpg';
      public var:any='Roller Rabbit'
      nmbr:any=10;
  constructor( public router:Router) { }

  ngOnInit() {
    console.log(this.img);
    console.log(this.var)
  }
  next(){
    this.router.navigate(['./page17'])
  }

}
