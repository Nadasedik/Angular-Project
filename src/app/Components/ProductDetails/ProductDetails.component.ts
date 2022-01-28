import { IProduct } from './../../ViewModels/IProduct';
import { StaticProductService } from 'src/app/Services/static-product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.scss']
})
export class ProductDetailsComponent implements OnInit {
PrdID:number=0;
Products:IProduct|null=null;
CprodId:number=0;
AllProduct:number[]=[]
  constructor(private activatedRoute: ActivatedRoute
               ,private prodService: StaticProductService
               , private location: Location
               , private router: Router) { }

  ngOnInit() {
    
    this.AllProduct=this.prodService.getAllProdductIDS()
    this.activatedRoute.paramMap.subscribe((paramMap)=>
    {
      this.CprodId=Number(paramMap.get('pid'))
      this.Products=this.prodService.gitProductByID(this.CprodId)
    }
    )
  }
  Back()
  {
    this.location.back();
  }

  Prev()
  {
    let CPrd=this.AllProduct.findIndex(ele=>ele==this.CprodId);
    let prevPrd;
    if(CPrd>0)
    {
      prevPrd=this.AllProduct[CPrd-1]
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
