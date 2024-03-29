import { Component, OnInit } from '@angular/core';
import {ICreateOrderRequest, IPayPalConfig} from 'ngx-paypal';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { ProduitService } from 'src/app/services/produit.service';



@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent implements OnInit {

  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiService, private cartService : CartService, private produitService : ProduitService) { }

public payPalConfig ?: IPayPalConfig;
public payPalConfig2 ?: IPayPalConfig;
public payPalConfig3 ?: IPayPalConfig;

 ngOnInit(): void {
 /* getting products */

/*    this.api.getProduct() */
    this.produitService.getProduits()
     .subscribe(res=>{
       this.productList = res;
       this.filterCategory = res;
       this.productList.forEach((a:any) => {
         if(a.category ==="women's clothing" || a.category ==="men's clothing"){
           a.category ="fashion"
         }
         Object.assign(a,{quantity:1,total:a.price});
       });
       console.log(this.productList)
     });

     this.cartService.search.subscribe((val:any)=>{
       this.searchKey = val;
     })





/* getting paypal config */
this.initConfig();
  }





/* configuring paypal */
private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'AdR73GFMOWUERP6bdmxUsyx4arRp1cK5s3ldMfIrqQuNA0cq6eVUFAZhzw2wqCT7T6ZCcnni2MWSfN3K', // add paypal clientId here
      createOrderOnClient: (data) => <ICreateOrderRequest> {
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'EUR',
            value: '551',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '551'
              }
            }
          },
          items: [{
            name: 'The Swag Coder',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'EUR',
              value: '551',
            },
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      /*   size: 'small', */
        color: 'blue',
        shape: 'rect'
      },

      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);

      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      }
    };
}
/************** END OF PAYPAL CONFIG ********************************/


/* define cart method */
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }



/* Filtering by Filter Category method */
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }




}





