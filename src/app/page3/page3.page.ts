import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {
  user:any={email:'',password:''}
 user1:any={email:'111',password:'111'}
  constructor(public router:Router, private alertController: AlertController) { }
 username:any='';
 password:any='';
  ngOnInit() {
  }
  async next1(){
    console.log(this.user)
if (this.user.email==this.user1.email&& this.user.password==this.user1.password){
  this.router.navigate(['./page9'])
}
else{
  
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }  
}
  }
//   async alert(){
//     if(this.username==111|| this.password==111){
//       this.router.navigate(['./page9'])
//     }
//     else{

    
//     const alert = await this.alertController.create({
//       header: 'Alert',
//       subHeader: 'Important message',
//       message: 'This is an alert!',
//       buttons: ['OK'],
//     });

//     await alert.present();
//   }
// }
    // this.router.navigate(['./page4'])

 

