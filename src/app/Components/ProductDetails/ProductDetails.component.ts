import { ProductsAPIService } from 'src/app/Services/ProductsAPI.service';
import { IProduct } from './../../ViewModels/IProduct';
import { StaticProductService } from 'src/app/Services/static-product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';
import { CategoryAPIService } from 'src/app/Services/CategoryAPI.service';

@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.scss']
})
export class ProductDetailsComponent implements OnInit {
PrdID:number=0;
 Products:IProduct|null=null;
 //Products:IProduct={} as IProduct
CprodId:number=0;
AllProduct:number[]=[]
  constructor(private activatedRoute: ActivatedRoute
              //,private prodService: StaticProductService
               ,private prodService: ProductsAPIService
              ,private APICat:CategoryAPIService
               , private location: Location
               , private router: Router) { }

  ngOnInit() {
    
    //this.AllProduct=this.prodService.getAllProdductIDS()
    this.activatedRoute.paramMap.subscribe((paramMap)=>
    {
      this.CprodId=Number(paramMap.get('pid'))
      this.prodService.getProductByID(this.CprodId).subscribe(prod => {
        this.Products = prod;
      });
    }
    )
    //  this.AllProduct=this.prodService.getAllProducts()
    // this.activatedRoute.paramMap.subscribe((paramMap)=>
    // {
    //   this.CprodId=Number(paramMap.get('pid'))
    //   this.Products=this.prodService.getProductByID(this.CprodId)
    // }
   // )
  }
  Back()
  {
    this.location.back();
  }

  Prev()
  {
    let PCrd=this.AllProduct.findIndex(ele=>ele==this.CprodId);
    let prevPrd;
    if(PCrd>0)
    {
      prevPrd=this.AllProduct[PCrd-1]
    this.router.navigate(['/Products',prevPrd])
    }
  }
  Next()
  {
    let CPrd=this.AllProduct.findIndex(ele=>ele==this.CprodId);
    let nextPrd;
    if(CPrd<this.AllProduct.length)
    {
      nextPrd=this.AllProduct[CPrd+1]
    this.router.navigate(['/Products',nextPrd])
    }
  }
}
