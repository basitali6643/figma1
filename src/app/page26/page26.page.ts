import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page26',
  templateUrl: './page26.page.html',
  styleUrls: ['./page26.page.scss'],
})
export class Page26Page implements OnInit {
name='basit'
items = ['item1', 'item2', 'item3', 'item4'];

addItem(newItem: string) {
  this.items.push(newItem);
}
  constructor() { }

  ngOnInit() {
  }

}
