import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../service/apicall.service';
import { GlobalService } from '../service/global.service';
import { ToastController } from '@ionic/angular';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-page30',
  templateUrl: './page30.page.html',
  styleUrls: ['./page30.page.scss'],
})
export class Page30Page implements OnInit {
 array1:any={id : '',c_id:'',p_name:'',qty:'',price:'',date:''}
 array2:any={c_id:'',p_name:'',qty:'',price:'',date:''}
 ok='ok'
 storedata:any=[];
 
  constructor(public apicall : ApicallService, public global : GlobalService,private toastController: ToastController,private actionSheetCtrl: ActionSheetController){ }

  ngOnInit() {
    this.global.pulldata.subscribe(res=> {
      this.storedata = res;
     
    });
    console.log(this.storedata);
    this.getalldata()
    }
    
    isModalOpen = false;

  async  next( ){
    if(this.ok == 'ok'){
      console.log(this.array1)  
      this.apicall.api_insertdata(this.array1)
      this.ok='ok'
    
      const toast = await this.toastController.create({
        message: 'Successfully Enter Data',
        duration: 1500,
        position: 'top'
      });
    
      await toast.present();
      this.ngOnInit();

      this.array1.id = '';
      this.array1.c_id = '';
      this.array1.p_name = '';
      this.array1.qty = '';
      this.array1.price = '';
      this.array1.date = '';


    }
//  else {
//   console.log(this.array1)  
//   this.ok='ok'

//   const toast = await this.toastController.create({
//     message: 'Successfully update successfully',
//     duration: 1500,
//     position: 'top'
//   });

//   await toast.present();
//   this.ngOnInit();

//  }
}
getalldata(){
  this.apicall.api_getalldata()

}
 async update(item:any,isOpen: boolean){
  this.isModalOpen = isOpen;

  console.log(item);
  this.array2.id = item.id;
  this.array2.c_id = item.c_id;
  this.array2.p_name = item.p_name;
  this.array2.qty = item.qty;
  this.array2.price = item.price;
  this.array2.date = item.date;

  this.ok='update'
  
}
 async delete(item:any){
  this.array1.id= item.id;
  this.apicall.api_deleteappdata(this.array1)
  const toast = await this.toastController.create({
    message: 'Successfully delete Data',
    duration: 1500,
    position: 'top'
  });

  await toast.present();
}
  next1(isOpen: boolean){
    this.isModalOpen = isOpen;
    console.log(this.array2)
      this.apicall.api_updateappdata(this.array2)

this.array1=this.array2;
this.ok='ok'
console.log(this.array1)
this.getalldata();
this.ngOnInit();

this.array1.id = '';
this.array1.c_id = '';
this.array1.p_name = '';
this.array1.qty = '';
this.array1.price = '';
this.array1.date = '';

  }

  }



