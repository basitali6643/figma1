import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page8',
  templateUrl: './page8.page.html',
  styleUrls: ['./page8.page.scss'],
})
export class Page8Page implements OnInit {
public recivedata:any;
  constructor(public router:Router) { }

  ngOnInit() {
this.recivedata=history.state.data
console.log(this.recivedata);

  }
  next(){
    this.router.navigate(['./page14'])
  }

}
