import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }


  // private cart = new BehaviorSubject<any>('')
  // public Cart = this.cart.asObservable();

  //   set_cart(cart:any){
  //     this.cart.next(cart);
  //   }

    private var1 = new BehaviorSubject<any>('')
  public fun = this.var1.asObservable();

    set_fun(var1:any){
      this.var1.next(var1);
    }


    private add = new BehaviorSubject<any>('')
  public get = this.add.asObservable();

    set_get(add:any){
      this.add.next(add);
    }

    // private color = new BehaviorSubject<any>('')
    // public color1 = this.add.asObservable();
  
    //   set_color1(color:any){
    //     this.color.next(color);
    //   }
  

    //   private size = new BehaviorSubject<any>('')
    //   public size1 = this.add.asObservable();
    
    //     set_size1(size:any){
    //       this.size.next(size);
    //     }
    
  
        private fav = new BehaviorSubject<any>('')
        public store = this.fav.asObservable();
      
          set_store(fav:any){
            this.fav.next(fav);
          }

           
        private page9 = new BehaviorSubject<any>('')
        public page14 = this.page9.asObservable();
      
          set_page14(page9:any){
            this.page9.next(page9);
          }
          private getapi = new BehaviorSubject<any>('')
        public getcall = this.getapi.asObservable();
      
          set_getcall(getapi:any){
            this.getapi.next(getapi);
          }
          private putdata  = new BehaviorSubject<any>('')
        public pulldata = this.putdata.asObservable();
      
          set_pulldata(putdata:any){
            this.putdata.next(putdata);
          }
 



    
}
