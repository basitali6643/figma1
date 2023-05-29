import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page25',
  templateUrl: './page25.page.html',
  styleUrls: ['./page25.page.scss'],
})
export class Page25Page implements OnInit {
  product:any;
  constructor() { }

  ngOnInit() {
   this.product=history.state.data;
   console.log(this.product);
  }

  
}
