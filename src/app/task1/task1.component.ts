import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss'],
})
export class Task1Component implements OnInit {
  // @Input() item = '';
  @Input()   array:any=[];
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }

  
  ngOnInit() {}
   next(item:any){
    console.log(item);
    this.newItemEvent.emit(item);
    
   }
   
}
