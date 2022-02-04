import { ADsService } from './../../Services/ADs.service';
import { IShoppingCartItems } from './../../ViewModels/IShoppingCartItems';
import { DiscountOffers } from './../../ViewModels/DiscountOffers.enum';

import { IProduct } from './../../ViewModels/IProduct';
import { StoreData } from './../../ViewModels/StoreData';
import { Component, OnInit ,Inject,Input,OnChanges,EventEmitter, Output, OnDestroy} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StaticProductService } from 'src/app/Services/static-product.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsAPIService } from 'src/app/Services/ProductsAPI.service';
import { CategoryAPIService } from 'src/app/Services/CategoryAPI.service';
// import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.scss']
})
export class ProductsComponent implements OnInit,OnChanges,OnDestroy {
  // storeInfo:StoreData;
   PrductList:IProduct[]=[];
 // filterProductList:IProduct[]=[];
  discount:DiscountOffers;
  ClientName:string;
  IsPurshased  :boolean = false;
  totalPrice:number=0;
  date:any
  NID:number=29909011509345
  card:number=1000000000000000;
  cart:IShoppingCartItems[]=[];
  @Input() SCatgID:number=0
  @Output() AddToCart:EventEmitter<IShoppingCartItems[]>;
  // @Output() AddToCart:EventEmitter<IShoppingCartItems>;
   private subscription:Subscription[]=[]
   nextAd:string=""
   show:boolean=false;

  constructor( //private staticPrd:StaticProductService
              private ApiPrd:ProductsAPIService
              , private router:Router
              ,private ads:ADsService
              ,private APICat:CategoryAPIService
              //,public dialog: MatDialog
              ) {

    this.AddToCart= new EventEmitter<IShoppingCartItems[]>();
    //this.AddToCart= new EventEmitter<IShoppingCartItems>();
    // this.storeInfo=new StoreData('Happy Store',
    // ['Cairo', 'Alex', 'Giza'],
    // 'https://picsum.photos/350/200');

    this.discount= DiscountOffers.discount1;
  //   this.ProductList=[{ID:1,Name:"dress",Quantity:1,Price:150,Image:'https://picsum.photos/id/1014/300/250',CateogryID:1},
  //   {ID:2,Name:"Apple",Quantity:10,Price:40000,Image:'https://picsum.photos/id/48/300/250',CateogryID:3}
  //  ,{ID:3,Name:"table",Quantity:9,Price:4000,Image:'https://picsum.photos/id/1068/300/250',CateogryID:2}
  //  ,{ID:4,Name:"LG",Quantity:13,Price:30000,Image:'https://picsum.photos/id/20/300/250',CateogryID:3}
  //  ,{ID:5,Name:"T-shirt",Quantity:2,Price:100,Image:'https://picsum.photos/id/1059/300/250',CateogryID:1}
  //  ,{ID:6,Name:"Lenovo",Quantity:20,Price:25000,Image:'https://picsum.photos/id/445/300/250',CateogryID:3}
  //   ,{ID:7,Name:"skirt",Quantity:0,Price:100,Image:'https://picsum.photos/id/535/300/250',CateogryID:1}
  //   ,{ID:8,Name:"Dell",Quantity:16,Price:20000,Image:'https://picsum.photos/id/0/300/250',CateogryID:3}
  //   ]

    //this.filterProductList=this.ProductList;
    this.ClientName="nada"
   this.date=new Date()
  }
 
ngOnChanges():void{
  //this.filterByCategory()
  //this.PrductList=this.staticPrd.getProductBtCatID(this.SCatgID)
  this.ApiPrd.getProductByCatID(this.SCatgID).subscribe(prd=>{
    this.PrductList=prd
  })
}
  ngOnInit() {
    //this.PrductList=this.staticPrd.getAllProduct();
    //this.filterProductList=this.staticPrd.getAllProduct()
    this.ApiPrd.getAllProducts().subscribe(prd=>{
      this.PrductList=prd
    })

    let observer={

     next:(ad:string)=>
     {this.show=true
      this.nextAd=ad
      console.log(ad)
     },
     error(err:string)
     {
       console.log(err)
     },
     complete:()=>
     {this.show=false
       console.log("finish")
     }
    }
    let ads=this.ads.DisplayAds(4).subscribe(observer)
    this.subscription.push(ads)
  }
toggle()
{
 
 this.IsPurshased  =!this.IsPurshased  ;
 console.log(this.IsPurshased )
}


//first trial
Add(ids:number,name:string,price:number,quantity:number,count:number)
{
    if(quantity>0&&quantity>=count&&count>0){
      let exist=this.cart.find(prd=>prd.ProductID==ids)
      if(exist)
      {
        this.cart.map(prod=>{
          if(prod.ProductID==ids)
          {
            prod.SelectedQuantity+=count
          }
        })
      }
      else{
      this.cart.push({
        ProductID:ids,
        ProductName:name,
        Unitprice:price,
        SelectedQuantity:count,
        TotalQuantity:quantity
      })}
      this.AddToCart.emit(this.cart)
      console.log(this.cart)
}
 
}

changeQuantity(PrdName: string, qnt: number): void 
{
  let product = this.PrductList.find(p => p.Name == PrdName);
  if(product) {
    this.PrductList.map(prod => {
      if(prod.Name == PrdName) {
        prod.Quantity -= qnt;
      }
    })
  }
}

// private filterByCategory()
// {
//   if(this.SCatgID==0)
//    this.filterProductList=this.ProductList
//   else{
//   this.filterProductList=this.ProductList.filter((prd)=>{
//   return prd.CateogryID==this.SCatgID
// })}
// //console.log(this.filterProductList)
// return this.filterProductList
// }

getDetails(prdID:number)
{
this.router.navigate(['/Products',prdID])
}

delete(ids:number)
{
  this.PrductList=this.PrductList.filter(prd =>  prd.id!=ids )
  this.ApiPrd.deleteProduct(ids).subscribe();
  alert("Product Removed Successfully ")

}
ngOnDestroy(): void {
  for (let ad of this.subscription) {
    ad.unsubscribe();
  }
  
}

}


