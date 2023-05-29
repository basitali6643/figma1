import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../service/global.service';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-page9',
  templateUrl: './page9.page.html',
  styleUrls: ['./page9.page.scss'],
})
export class Page9Page implements OnInit {
  public datacloth: any = [ ]
  public databutton: any = [ ]

  public datacloth1: any = []
  
     public databag: any = []
  
     public datashirt: any = []
  
    public datashoes: any = []
  public array: any = []

  var: any = 0;
  constructor(public router: Router, public global: GlobalService,public dataService:DataService) { }

  getData1(){
    this.dataService.getData1().subscribe(data1 =>{
      this.datacloth = data1
    })}
    getData2(){
      this.dataService.getData2().subscribe(data2 =>{
        this.databutton = data2
      })}
      getData3(){
        this.dataService.getData3().subscribe(data3 =>{
          this.datacloth1 = data3
        })}
        getData4(){
          this.dataService.getData4().subscribe(data4 =>{
            this.databag = data4
          })}
          getData5(){
            this.dataService.getData5().subscribe(data5 =>{
              this.datashirt = data5
            })}
            getData6(){
              this.dataService.getData6().subscribe(data6 =>{
                this.datashoes = data6
              })}
  
  ngOnInit() {
    this.getData1();
this.getData2();
this.getData3();
this.getData4();
this.getData5();
this.getData6();
    this.array = this.datacloth;

    this.global.fun.subscribe(res => {
      this.var = res;
      console.log(this.var)
    })


  }
  next() {
    this.router.navigate(['./page8'])
  }
  next1(id: any) {
    console.log(id)
    if (id === 1) {
      this.array = this.datacloth1
    }
    else if (id === 2) {
      this.array = this.datashirt
    }
    else if (id === 3) {
      this.array = this.databag
    }
    else if (id === 4) {
      this.array = this.datashoes
    }
    else {
      this.array = this.datacloth
    }
  }
  next2(item: any) {
    console.log(item)
    // this.global.set_page14(item)    

    this.router.navigate(['./page14'], 
    { state: { data: item } }
    );


  }

  slideOpts = {
    slidesPerView: 2,
    spaceBetween: 0,

breakpoints:{
  375:{
    slidesPerView: 2,
    spaceBetween: 0,

  },
768:{
  slidesPerView: 3,
  spaceBetween: 2,
},  
1024:{
  slidesPerView: 4,
  spaceBetween: 2,
  }

}

  }
}
