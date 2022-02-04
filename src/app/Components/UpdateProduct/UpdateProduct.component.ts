import { IProduct } from './../../ViewModels/IProduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { StaticProductService } from 'src/app/Services/static-product.service';
import { ProductsAPIService } from 'src/app/Services/ProductsAPI.service';
import { ICategory } from 'src/app/ViewModels/ICategory';
import { CategoryAPIService } from 'src/app/Services/CategoryAPI.service';


@Component({
  selector: 'app-UpdateProduct',
  templateUrl: './UpdateProduct.component.html',
  styleUrls: ['./UpdateProduct.component.scss']
})
export class UpdateProductComponent implements OnInit {
 //UpdatedProduct!:IProduct|null 
 UpdatedProduct:IProduct={}as IProduct
 //Product!: IProduct | null ;
 CategoryItem:ICategory[] | undefined;
 add!:boolean;
 

  constructor(//private staticPrd:StaticProductService
               private APIPrd:ProductsAPIService
              ,private activatedRoute: ActivatedRoute
              , private router: Router
              ,private APICat:CategoryAPIService)

               {
                console.log(router.url);
               }

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe((paramMap)=>
    // {
    //   let idd=Number(paramMap.get('pid'))
    //   let prodt=this.staticPrd.gitProductByID(idd)
    //   this.UpdatedProduct=prodt
    // })
    this.activatedRoute.paramMap.subscribe(param => {

      let id = Number(param.get('id'));
    if(this.router.url=='/AddProduct')
    {
      this.add=true
    }
    if(this.router.url==`/UpdateProduct${id}`)
    {
      this.add=false
          this.APIPrd.getProductByID(id).subscribe(prd=>{
            this.UpdatedProduct=prd
            console.log(prd)
            console.log(this.add)
    })
  }
  })

    this.APICat.getAllCategories().subscribe(cat=>{
      this.CategoryItem=cat
    })
  }
  
  //  UpadateProduct(ids:number,name:string,Qnt:number,price:number,Img:string,cID:number):void
  // {

  //   this.UpdatedProduct={
  //     id:ids,
  //     Name:name,
  //     Quantity:Qnt,
  //     Price:price,
  //     Image:Img,
  //     CateogryID:cID
  //   }

  //   this.staticPrd.UpdateProducts(ids,this.UpdatedProduct)
  //    console.log(this.UpdatedProduct)
  //   this.router.navigate(['/Products']);
  // }
  UpadateProduct()
  {
    this.activatedRoute.paramMap.subscribe((paramMap)=>
    {
      let idd=Number(paramMap.get('pid'))
      this.APIPrd.updateProduct(idd,this.UpdatedProduct) .subscribe(() =>
      this.router.navigate(['/Products']));
      alert('Updated Successfully');
       console.log(this.UpdatedProduct)
    })

  }

  AddProducts()
  {
    this.APIPrd.AddProduct(this.UpdatedProduct)
    .subscribe(prods => {
      alert('added Successfully');
      this.router.navigate(['/Products']);
    })
    console.log(this.UpdatedProduct)

  }

 

}
