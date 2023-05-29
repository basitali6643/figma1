import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
 getData():Observable<any>{
  let dataarray =[
    {img:'../../assets/img26.jpg',name:'Roller Rabbit',price:10,quantity:1,subtotal:''},
    {img:'../../assets/img26.jpg',name:'Roller Rabbit',price:20,quantity:1,subtotal:'' },
];
return of(dataarray);

 }

 getData1():Observable<any>{
  let datacloth =[
    { id:1,img: '../../assets/img11.jpg', name: 'cloth', quantity: 1, size: '', color: '', price: 10,subtotal:'' },
    {id:2, img: '../../assets/img25.jpg', name: 'shirt', quantity: 1, size: '', color: '', price: 20,subtotal:'' },
     {id:3, img: '../../assets/img6.jpg', name: 'bag', quantity: 1, size: '', color: '', price: 30,subtotal:'' },
    { id:4,img: '../../assets/img23.jpg', name: 'shoes', quantity: 1, size: '', color: '', price: 40,subtotal:'' }
  
];
return of(datacloth);

 }

 getData2():Observable<any>{
  let databutton =[
    { id: 1, name: 'cloth' }, { id: 2, name: 'shirt' }, { id: 3, name: 'bag' }, { id: 4, name: 'shoes' }
];
return of(databutton);

 }
 getData3():Observable<any>{
  let datacloth1 =[
    {id:5, img: '../../assets/img11.jpg', name: 'cloth1', quantity: 1, size: '', cart: '', color: '' , price: 10,subtotal:''},
   {id:6, img: '../../assets/img11.jpg', name: 'cloth2', quantity: 1, size: '', color: '', cart: '' , price: 10,subtotal:''},
    {id:7, img: '../../assets/img11.jpg', name: 'cloth3', quantity: 1, size: '', color: '', price: 10,subtotal:'' },
     {id:8, img: '../../assets/img11.jpg', name: 'cloth4', quantity: 1, size: '', color: '' , price: 10,subtotal:''}
];
return of(datacloth1);

 }
 getData4():Observable<any>{
  let databag =[
    {id:9, img: '../../assets/img6.jpg', name: 'bag1', quantity: 1, size: '', color: '', price:20,subtotal:'' },
   {id:10, img: '../../assets/img6.jpg', name: 'bag2', quantity: 1, size: '', color: '', price: 20,subtotal:'' },
    {id:11, img: '../../assets/img6.jpg', name: 'bag3', quantity: 1, size: '', color: '', price: 20,subtotal:'' },
     {id:12, img: '../../assets/img6.jpg', name: 'bag4', quantity: 1, size: '', color: '', price: 20,subtotal:'' }
];
return of(databag);

 }

 getData5():Observable<any>{
  let datashirt =[
    {id:13, img: '../../assets/img25.jpg', name: 'shirt1', quantity: 1, size: '', color: '', price: 30,subtotal:'' },
    {id:14, img: '../../assets/img25.jpg', name: 'shirt2', quantity: 1, size: '', color: '' , price: 30,subtotal:''},
     {id:15, img: '../../assets/img25.jpg', name: 'shirt3', quantity: 1, size: '', color: '', price: 30,subtotal:'' }, 
     {id:16, img: '../../assets/img25.jpg', name: 'shirt4', quantity: 1, size: '', color: '', price: 30,subtotal:'' }
];
return of(datashirt);

 }

 getData6():Observable<any>{
  let datashoes =[
    
     { id:17, img: '../../assets/img23.jpg', name: 'shoes1', quantity: 1, size: '', color: '', price: 40,subtotal:'' },
   { id:18, img: '../../assets/img23.jpg', name: 'shoes2', quantity: 1, size: '', color: '', price: 40,subtotal:'' },
    { id:19, img: '../../assets/img23.jpg', name: 'shoes3', quantity: 1, size: '', color: '', price: 40,subtotal:'' }, 
    {  id:20,img: '../../assets/img23.jpg', name: 'shoes4', quantity: 1, size: '', color: '', price: 40,subtotal:'' }
];
return of(datashoes);

 }


 getData7():Observable<any>{
  let datasize =[
    {size:'S'},{size:'M'},{size:'L'}
];
return of(datasize);

 }

 getData8():Observable<any>{
  let datacolor =[
    {color:'primary'},{color:'danger'},{color:'dark'},{color:'light'}
];
return of(datacolor);

 }



}
