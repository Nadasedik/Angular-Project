import { ProductsComponent } from './../../Products/Products.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IShoppingCartItems } from 'src/app/ViewModels/IShoppingCartItems';
import { ICategory } from './../../../ViewModels/ICategory';
@Component({
  selector: 'app-OrderMaster',
  templateUrl: './OrderMaster.component.html',
  styleUrls: ['./OrderMaster.component.scss']
})
export class OrderMasterComponent implements OnInit,AfterViewInit {
  CategoryItem:ICategory[];
  CategorId:number=0;
  selectedCatID:number=0;
  TotalPrice:number=0;
  pName:string=""
  pQun:number=0;
  cartProductList:IShoppingCartItems[]=[];
  @ViewChild(ProductsComponent) prdComp!:ProductsComponent
  constructor() { 
    this.CategoryItem=[{ID:1,Name:"clothes"},{ID:2,Name:"furniture"},{ID:3,Name:"Laptop"}]
  
  }
  ngAfterViewInit(): void {
 
    console.log(this.prdComp.ProductList)
  }

  ngOnInit() {
  }
  chooseCategory(id:number)
{
  this.CategorId=id;
  console.log(id)
}

//second trial
// displayCart(data:IShoppingCartItems):void
// {
//   let exist=this.cartProductList.find(prd=>prd.ProductName==data.ProductName)
//   if(exist)
//   {
//    this.cartProductList.map(p=>{
//     if(p.ProductName == exist?.ProductName) {
//       p.SelectedQuantity +=data.SelectedQuantity;
//       console.log(this.cartProductList)
//    }})
//    console.log(this.cartProductList)
//   }
//   else{
//   this.cartProductList.push(data)
// }
//   console.log(this.cartProductList)

// }

//first trial
displayCart(data:any):void
{
  this.cartProductList=data
  console.log(this.cartProductList)

}
calcTotalPrice(prod: IShoppingCartItems, newQnt: number): void {
  this.cartProductList.map(prd => {
    if(prd.ProductName == prod.ProductName) {
      prd.SelectedQuantity = newQnt;
    }
  })
}

finalTotalPrice()
{
  for(let i=0;i<this.cartProductList.length;i++)
  {
    this.TotalPrice+=this.cartProductList[i].Unitprice*this.cartProductList[i].SelectedQuantity
    
    this.prdComp.changeQuantity(this.cartProductList[i].ProductName, this.cartProductList[i].SelectedQuantity);

  }
  console.log(this.TotalPrice)
}

}
// delete(id:number)
// {
//   let all=this.cartProductList.filter((item) => {
   
//   return item.ProductID==id
//   })

// }



