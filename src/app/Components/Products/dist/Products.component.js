"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsComponent = void 0;
var DiscountOffers_enum_1 = require("./../../ViewModels/DiscountOffers.enum");
var core_1 = require("@angular/core");
var ProductsComponent = /** @class */ (function () {
    // @Output() AddToCart:EventEmitter<IShoppingCartItems>;
    function ProductsComponent(staticPrd, router) {
        this.staticPrd = staticPrd;
        this.router = router;
        // storeInfo:StoreData;
        this.PrductList = [];
        this.IsPurshased = false;
        this.totalPrice = 0;
        this.NID = 29909011509345;
        this.card = 1000000000000000;
        this.cart = [];
        this.SCatgID = 0;
        this.AddToCart = new core_1.EventEmitter();
        //this.AddToCart= new EventEmitter<IShoppingCartItems>();
        // this.storeInfo=new StoreData('Happy Store',
        // ['Cairo', 'Alex', 'Giza'],
        // 'https://picsum.photos/350/200');
        this.discount = DiscountOffers_enum_1.DiscountOffers.discount1;
        //   this.ProductList=[{ID:1,Name:"dress",Quantity:1,Price:150,Image:'https://picsum.photos/id/1014/300/250',CateogryID:1},
        //   {ID:2,Name:"Apple",Quantity:10,Price:40000,Image:'https://picsum.photos/id/48/300/250',CateogryID:3}
        //  ,{ID:3,Name:"table",Quantity:9,Price:4000,Image:'https://picsum.photos/id/1068/300/250',CateogryID:2}
        //  ,{ID:4,Name:"LG",Quantity:13,Price:30000,Image:'https://picsum.photos/id/20/300/250',CateogryID:3}
        //  ,{ID:5,Name:"T-shirt",Quantity:2,Price:100,Image:'https://picsum.photos/id/1059/300/250',CateogryID:1}
        //  ,{ID:6,Name:"Lenovo",Quantity:20,Price:25000,Image:'https://picsum.photos/id/445/300/250',CateogryID:3}
        //   ,{ID:7,Name:"skirt",Quantity:0,Price:100,Image:'https://picsum.photos/id/535/300/250',CateogryID:1}
        //   ,{ID:8,Name:"Dell",Quantity:16,Price:20000,Image:'https://picsum.photos/id/0/300/250',CateogryID:3}
        //   ]
        //this.filterProductList=this.ProductList;
        this.ClientName = "nada";
        this.date = new Date();
    }
    ProductsComponent.prototype.ngOnChanges = function () {
        //this.filterByCategory()
        this.PrductList = this.staticPrd.getProductBtCatID(this.SCatgID);
    };
    ProductsComponent.prototype.ngOnInit = function () {
        this.PrductList = this.staticPrd.getAllProduct();
        //this.filterProductList=this.staticPrd.getAllProduct()
    };
    ProductsComponent.prototype.toggle = function () {
        this.IsPurshased = !this.IsPurshased;
        console.log(this.IsPurshased);
    };
    //second trial
    // Add(product:IProduct,count:number)
    // {
    //   this.cart={
    //    ProductID:product.ID,
    //   ProductName:product.Name,
    //   Unitprice:product.Price,
    //   SelectedQuantity:count,
    //   }
    //   this.AddToCart.emit(this.cart)
    // }
    //first trial
    ProductsComponent.prototype.Add = function (id, name, price, quantity, count) {
        // this.totalPrice+= +count*price;
        // if(this.ProductList[id].Quantity>=count&&this.ProductList[id].Quantity>0)
        // this.ProductList[id-1].Quantity-=count
        // console.log(this.ProductList[id-1].Quantity)
        //id.Quantity--
        //this.Quantity=this.Quantity-1
        //console.log(Quantity)
        if (quantity > 0 && quantity >= count && count > 0) {
            var exist = this.cart.find(function (prd) { return prd.ProductID == id; });
            if (exist) {
                this.cart.map(function (prod) {
                    if (prod.ProductID == id) {
                        prod.SelectedQuantity += count;
                    }
                });
            }
            else {
                this.cart.push({
                    ProductID: id,
                    ProductName: name,
                    Unitprice: price,
                    SelectedQuantity: count,
                    TotalQuantity: quantity
                });
            }
            this.AddToCart.emit(this.cart);
            console.log(this.cart);
        }
    };
    ProductsComponent.prototype.changeQuantity = function (PrdName, qnt) {
        var product = this.PrductList.find(function (p) { return p.Name == PrdName; });
        if (product) {
            this.PrductList.map(function (prod) {
                if (prod.Name == PrdName) {
                    prod.Quantity -= qnt;
                }
            });
        }
    };
    // private filterByCategory()
    // {
    //   if(this.SCatgID==0)
    //    this.filterProductList=this.ProductList
    //   else{
    //   this.filterProductList=this.ProductList.filter((prd)=>{
    //   return prd.CateogryID==this.SCatgID
    // })}
    // //console.log(this.filterProductList)
    // return this.filterProductList
    // }
    ProductsComponent.prototype.getDetails = function (prdID) {
        this.router.navigate(['/Products', prdID]);
    };
    __decorate([
        core_1.Input()
    ], ProductsComponent.prototype, "SCatgID");
    __decorate([
        core_1.Output()
    ], ProductsComponent.prototype, "AddToCart");
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-Products',
            templateUrl: './Products.component.html',
            styleUrls: ['./Products.component.scss']
        })
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
