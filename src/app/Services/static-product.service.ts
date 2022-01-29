import { IProduct } from './../ViewModels/IProduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {
private   ProductList:IProduct[];
  constructor() { 
    this.ProductList=[{ID:1,Name:"dress",Quantity:30,Price:150,Image:'https://picsum.photos/id/1014/300/250',CateogryID:1},
    {ID:2,Name:"Apple",Quantity:10,Price:40000,Image:'https://picsum.photos/id/48/300/250',CateogryID:3}
   ,{ID:3,Name:"table",Quantity:9,Price:4000,Image:'https://picsum.photos/id/1068/300/250',CateogryID:2}
   ,{ID:4,Name:"LG",Quantity:13,Price:30000,Image:'https://picsum.photos/id/20/300/250',CateogryID:3}
   ,{ID:5,Name:"T-shirt",Quantity:1,Price:100,Image:'https://picsum.photos/id/1059/300/250',CateogryID:1}
   ,{ID:6,Name:"Lenovo",Quantity:20,Price:25000,Image:'https://picsum.photos/id/445/300/250',CateogryID:3}
    ,{ID:7,Name:"skirt",Quantity:0,Price:100,Image:'https://picsum.photos/id/535/300/250',CateogryID:1}
    ,{ID:8,Name:"Dell",Quantity:16,Price:20000,Image:'https://picsum.photos/id/0/300/250',CateogryID:3}
    ]
  }

  getAllProduct():IProduct[]
  {
    return this.ProductList
  }

  getProductBtCatID(SCatgID:number):IProduct[]
  {
    if(SCatgID==0)
    return this.ProductList;
    else
    {
      let cat= this.ProductList.filter(prd=>
         prd.CateogryID==SCatgID
      )
      console.log(cat)
      return cat
    }

  }
  
  gitProductByID(prdID:number): IProduct | null
  {
    let exist=this.ProductList.find(prd=>prd.ID==prdID)
    if(exist)
    {
      return exist
    }
    else
    {
      return null
    }
  }

  getAllProdductIDS():number[]
  {
    let prdid:number[]=this.ProductList.map(prd=>prd.ID)
    return prdid
  }

  addProduct(prd:IProduct)
  {
    this.ProductList.push(prd);
  }

  UpdateProducts(id:number,prd:IProduct)
  {
    let pID=this.ProductList.find(prod=>prod.ID==id)
    if(pID)
    {
      this.ProductList.map(p=>
        {
          if(p.ID==id)
          {
            p.Name=prd.Name
            p.Quantity=prd.Quantity;
            p.Price=prd.Price;
            p.Image=prd.Image;
            p.CateogryID=prd.CateogryID
          }
        })
    }
    else{
      alert("Product Not Found !")
    }
    for(let i in this.ProductList)
    {
      if(this.ProductList[i].ID==prd.ID)
      this.ProductList[i]=prd
     // console.log(this.ProductList[i])
    }
    //console.log(this.ProductList)
    
  }
  // EditProduct(prodID: number, newData: IProduct): void {
  //   //if product exist
  //   let productIsExist = this.ProductList.find(prod => prod.ID == prodID);
  //   if(productIsExist != undefined) {
  //     this.ProductList.map(p => {
  //       if(p.ID == prodID) {
  //         //override values
  //         p.Name = newData.Name;
  //         p.Price = newData.Price;
  //         p.Quantity = newData.Quantity;
  //         p.CateogryID = newData.CateogryID;
  //         p.Image = newData.Image;
  //       }
  //     })
  //   } else {
  //     alert('product not exist');
  //   }
  // }
}
