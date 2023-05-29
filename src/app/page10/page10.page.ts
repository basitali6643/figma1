import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page10',
  templateUrl: './page10.page.html',
  styleUrls: ['./page10.page.scss'],
})
export class Page10Page implements OnInit {
public Adress:any=[{img:'../../assets/img23.jpg' ,title:'Gia Borghini' ,text:'RHW Rosie Sandals',star:'star',rating:'(4.5)',price:'745.00'},
{img:'../../assets/img26.jpg' ,title:'Gia Borghini' ,text:'RHW Rosie Sandals',star:'star',rating:'(4.5)',price:'890 .00'}
]
  constructor() { }

  ngOnInit() {  

  }
  slideOpts={

    slidesPerView: 1.2,
    spaceBetween: 1 ,
    freeMode:true,
    speed:500,
    initialSlide:1
 
   }




}
