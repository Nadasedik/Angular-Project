import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/IProduct';
@Injectable({
  providedIn: 'root'
})
export class StaticProductService {
private   ProductList:IProduct[];
  constructor() { 
    this.ProductList=[{ID:1,Name:"dress",Quantity:1,Price:150,Image:'https://picsum.photos/id/1014/300/250',CateogryID:1},
    {ID:2,Name:"Apple",Quantity:10,Price:40000,Image:'https://picsum.photos/id/48/300/250',CateogryID:3}
   ,{ID:3,Name:"table",Quantity:9,Price:4000,Image:'https://picsum.photos/id/1068/300/250',CateogryID:2}
   ,{ID:4,Name:"LG",Quantity:13,Price:30000,Image:'https://picsum.photos/id/20/300/250',CateogryID:3}
   ,{ID:5,Name:"T-shirt",Quantity:2,Price:100,Image:'https://picsum.photos/id/1059/300/250',CateogryID:1}
   ,{ID:6,Name:"Lenovo",Quantity:20,Price:25000,Image:'https://picsum.photos/id/445/300/250',CateogryID:3}
    ,{ID:7,Name:"skirt",Quantity:0,Price:100,Image:'https://picsum.photos/id/535/300/250',CateogryID:1}
    ,{ID:8,Name:"Dell",Quantity:16,Price:20000,Image:'https://picsum.photos/id/0/300/250',CateogryID:3}
    ]
  }
}
