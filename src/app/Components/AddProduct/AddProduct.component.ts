import { IProduct } from './../../ViewModels/IProduct';
import { Component, OnInit } from '@angular/core';
import { StaticProductService } from 'src/app/Services/static-product.service';
import { Router } from '@angular/router';
import { CategoryAPIService } from 'src/app/Services/CategoryAPI.service';
import { ICategory } from 'src/app/ViewModels/ICategory';
import { ProductsAPIService } from 'src/app/Services/ProductsAPI.service';

@Component({
  selector: 'app-AddProduct',
  templateUrl: './AddProduct.component.html',
  styleUrls: ['./AddProduct.component.scss']
})
export class AddProductComponent implements OnInit {
  selectedCatID:number=0;
CategoryItem:ICategory[] | undefined;
NewProduct:IProduct={} as IProduct
  constructor(//private staticPrd:StaticProductService
             private router: Router
            ,private ApiPrd:ProductsAPIService
            ,private APICat:CategoryAPIService) { }

  ngOnInit() {
    this.APICat.getAllCategories().subscribe(cat=>{
      this.CategoryItem=cat
    })
  }

  // AddProduct(id:number,name:string,Qnt:number,price:number,Img:string,cID:number)
  // {
    
  //   this.NewProduct={
  //     ID:id,
  //     Name:name,
  //     Quantity:Qnt,
  //     Price:price,
  //     Image:Img,
  //     CateogryID:+cID
  //   }
  //   console.log(this.NewProduct)
  //   this.ApiPrd.AddProduct(this.NewProduct)
  //   //this.staticPrd.addProduct(this.NewProduct)
  //   this.router.navigate(['/Products']);
  // }

  AddProducts()
  {
    this.ApiPrd.AddProduct(this.NewProduct)
    .subscribe(prods => {
      alert('added Successfully');
      this.router.navigate(['/Products']);
    })
    console.log(this.NewProduct)

  }

}
