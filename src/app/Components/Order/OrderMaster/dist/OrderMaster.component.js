"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderMasterComponent = void 0;
var Products_component_1 = require("./../../Products/Products.component");
var core_1 = require("@angular/core");
var OrderMasterComponent = /** @class */ (function () {
    function OrderMasterComponent() {
        this.CategorId = 0;
        this.selectedCatID = 0;
        this.TotalPrice = 0;
        this.pName = "";
        this.pQun = 0;
        this.cartProductList = [];
        this.CategoryItem = [{ ID: 1, Name: "clothes" }, { ID: 2, Name: "furniture" }, { ID: 3, Name: "Laptop" }];
    }
    OrderMasterComponent.prototype.ngAfterViewInit = function () {
        //console.log(this.prdComp.ProductList)
    };
    OrderMasterComponent.prototype.ngOnInit = function () {
    };
    OrderMasterComponent.prototype.chooseCategory = function (id) {
        this.CategorId = id;
        console.log(id);
    };
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
    OrderMasterComponent.prototype.displayCart = function (data) {
        this.cartProductList = data;
        console.log(this.cartProductList);
    };
    OrderMasterComponent.prototype.calcTotalPrice = function (prod, newQnt) {
        this.cartProductList.map(function (prd) {
            if (prd.ProductName == prod.ProductName) {
                prd.SelectedQuantity = newQnt;
            }
        });
    };
    OrderMasterComponent.prototype.finalTotalPrice = function () {
        for (var i = 0; i < this.cartProductList.length; i++) {
            this.TotalPrice += this.cartProductList[i].Unitprice * this.cartProductList[i].SelectedQuantity;
            this.prdComp.changeQuantity(this.cartProductList[i].ProductName, this.cartProductList[i].SelectedQuantity);
            // this.prdComp.changeQuantity(this.cartProductList[i].ProductName, this.cartProductList[i].SelectedQuantity);
        }
        console.log(this.TotalPrice);
        //this.cartProductList=[]
    };
    OrderMasterComponent.prototype["delete"] = function (id) {
        this.cartProductList = this.cartProductList.filter(function (prd) { return prd.ProductID != id; });
        console.log(this.cartProductList);
    };
    __decorate([
        core_1.ViewChild(Products_component_1.ProductsComponent)
    ], OrderMasterComponent.prototype, "prdComp");
    OrderMasterComponent = __decorate([
        core_1.Component({
            selector: 'app-OrderMaster',
            templateUrl: './OrderMaster.component.html',
            styleUrls: ['./OrderMaster.component.scss']
        })
    ], OrderMasterComponent);
    return OrderMasterComponent;
}());
exports.OrderMasterComponent = OrderMasterComponent;
