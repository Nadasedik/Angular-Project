import { IProduct } from './../../ViewModels/IProduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductService } from 'src/app/Services/static-product.service';


@Component({
  selector: 'app-UpdateProduct',
  templateUrl: './UpdateProduct.component.html',
  styleUrls: ['./UpdateProduct.component.scss']
})
export class UpdateProductComponent implements OnInit {
 UpdatedProduct!:IProduct|null 
 //UpdatedProduct={}as IProduct
  constructor(private staticPrd:StaticProductService
              ,private activatedRoute: ActivatedRoute
              , private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap)=>
    {
      let idd=Number(paramMap.get('pid'))
      let prodt=this.staticPrd.gitProductByID(idd)
      this.UpdatedProduct=prodt
    })
  }
//   UpadateProduct(id:number,name:string,Qnt:number,price:number,Img:string,cID:number):void

  UpadateProduct(data:any):void
  {
    let [name, qnt, price, imgUrl, catID] = data;
    this.activatedRoute.paramMap.subscribe(param => {
      let id2 = Number(param.get('id'));
      this.staticPrd.UpdateProducts
      ( id2, {ID: id2,Name:name, Quantity: qnt, Price:price, Image: imgUrl, CateogryID:catID})
    })
    // this.UpdatedProduct={
    //   ID:id,
    //   Name:name,
    //   Quantity:Qnt,
    //   Price:price,
    //   Image:Img,
    //   CateogryID:cID
    // }
    // this.activatedRoute.paramMap.subscribe(param => {
    //   let id2 = Number(param.get('id'));
    //   this.staticPrd.UpdateProducts( id2,this.UpdatedProduct)
    // })
    //this.UpdatedProduct=this.staticPrd.UpdateProducts(this.UpdatedProduct)
    // this.staticPrd.UpdateProducts(id,this.UpdatedProduct)
    // console.log(this.UpdatedProduct)
    this.router.navigate(['/Products']);
  }

}
