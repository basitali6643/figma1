import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../service/global.service';
import { ToastController } from '@ionic/angular';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-page14',
  templateUrl: './page14.page.html',
  styleUrls: ['./page14.page.scss'],
})
export class Page14Page implements OnInit {
  product1:any=0;
  public sizesselect:any=0;
   img:any='../../assets/img16-removebg-preview (2).png'
public product:any;
public datasize:any=[]
public datacolor:any=[]
emptycolor:any;
  emptysize:any;
  favoritedata:any;
  product2:any;
// storedata:any=[];
// getdata:any=[];

  constructor( public router:Router,public global:GlobalService, public dataService:DataService,private toastController: ToastController) { }
  getData7(){
    this.dataService.getData7().subscribe(data7 =>{
      this.datasize = data7
    })
  }
  getData8(){
    this.dataService.getData8().subscribe(data8 =>{
      this.datacolor = data8
    })
  }
  ionViewDidEnter(){
    this.ngOnInit();
  }
  ngOnInit() {
this.getData7();
this.getData8();
    this.product=history.state.data;
    // this.global.page14.subscribe(res=>{
    //   this.product=res;
    //   console.log(this.product)
    // })

    console.log(this.product);
    this.global.fun.subscribe(res=>{
      this.product1=res;
    })
    this.product2=this.product
    this.global.store.subscribe(res=>{
      this.product2=res;
      this.product2=this.product
    })
    

  }
  colorselect(item:any){
    this.emptycolor=item  ;
    this.product.color=this.emptycolor
    
    console.log(this.emptycolor)
    }
    sizeselect(item:any){
    this.emptysize=item;
    this.product.size=this.emptysize
    
    console.log(this.emptysize)
    
    }

      
    async fav1( products:any,position:'top'){
        
      let storedata:any = [];
      let getdata :any= [];
      this.global.store.subscribe(res=> {
        storedata = res;
        console.log(storedata);
      })
     //  products.color =this.emptycolor;
     //  products.size =this.emptysize;
     
      
      if(storedata.length===0){
        getdata.push(products);
        this.global.set_store(getdata)
      }
      else{
        const found = storedata.find((item:any)=> item.id == products.id )
        console.log(found)
        if(found){
          for(let i=0; i<storedata.length; i++){
            if(storedata[i].id=== found.id ){
             //  cartData[i].quantity++;
                           const toast = await this.toastController.create({
                             message: 'you have already this product',
                             duration: 1500,
                             position: position
                           });
                       
                           await toast.present();
                         }
                   //     }
 
 
             //  this.global.set_get(cartData);
            
          }
        }
        else{
          storedata.push(products)
          this.global.set_store(storedata)
        }
       
       
        }        
                     this.router.navigate(['./page29'])
 
           }
 
           

  next(products:any){

    this.product1++;
      this.global.set_fun(this.product1);
     console.log(products);
    
     let cartArray1:any=[];
     let cartData:any = [];
     let cartArray :any= [];
     this.global.get.subscribe(res=> {
       cartData = res;
       console.log(cartData);
     })
    //  products.color =this.emptycolor;
    //  products.size =this.emptysize;
    
    
     if(cartData.length===0){
       cartArray.push(products);
       this.global.set_get(cartArray)
     }
     else{
       const found = cartData.find((item:any)=> item.id == products.id && item.color.color===products.color.color && item.size.size===products.size.size )
       console.log(found)
       if(found){
      
         for(let i=0; i<cartData.length; i++){
           if(cartData[i].id === found.id  && found.color.color=== cartData[i].color.color &&  found.size.size === cartData[i].size.size ){
             cartData[i].quantity++;
             this.global.set_get(cartData);
           }
         }
       }
       else{
         cartData.push(products)
         this.global.set_get(cartData)
       }
      
      
       }
        this.router.navigate(['./page15']);
      
      } 

      
      

        }


        // this.global.store.subscribe(res=>{
          //           storedata=res;
          //         })
          
          //         let storedata:any=[];
          //          let getdata:any=[];
          //         if(storedata.length===0){
          //      getdata.push(products);
          //      this.global.set_store(getdata);
          
          //         }
          //         // else{
          //         //   const found =storedata.find((item:any)=> item.id == products.id)
          //         //   console.log(found)
          //         //   if(found){
          //         //     for(let i=0; i<storedata.length; i++){
          //         //       if(storedata[i].id=== found.id){
          //         //         const toast = await this.toastController.create({
          //         //           message: 'you have already this product',
          //         //           duration: 1500,
          //         //           position: position
          //         //         });
                      
          //         //         await toast.present();
          //         //       }
          //         //     }
                      
          //         //   }
          //           else{
          // storedata.push(products) 
          //   this.global.set_store(storedata);
          
          //           }
     
  