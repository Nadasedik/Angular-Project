import { IProduct } from './../../ViewModels/IProduct';
import { Component, OnInit } from '@angular/core';
import { StaticProductService } from 'src/app/Services/static-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AddProduct',
  templateUrl: './AddProduct.component.html',
  styleUrls: ['./AddProduct.component.scss']
})
export class AddProductComponent implements OnInit {

NewProduct:IProduct={} as IProduct
  constructor(private staticPrd:StaticProductService
            , private router: Router) { }

  ngOnInit() {
  }

  AddProduct(id:number,name:string,Qnt:number,price:number,Img:string,cID:number)
  {
    
    this.NewProduct={
      ID:id,
      Name:name,
      Quantity:Qnt,
      Price:price,
      Image:Img,
      CateogryID:cID
    }
    console.log(this.NewProduct)
    this.staticPrd.addProduct(this.NewProduct)
    this.router.navigate(['/Products']);
  }

}
