"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddProductComponent = void 0;
var core_1 = require("@angular/core");
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(staticPrd, router) {
        this.staticPrd = staticPrd;
        this.router = router;
        this.NewProduct = {};
    }
    AddProductComponent.prototype.ngOnInit = function () {
    };
    AddProductComponent.prototype.AddProduct = function (id, name, Qnt, price, Img, cID) {
        this.NewProduct = {
            ID: id,
            Name: name,
            Quantity: Qnt,
            Price: price,
            Image: Img,
            CateogryID: cID
        };
        console.log(this.NewProduct);
        this.staticPrd.addProduct(this.NewProduct);
        this.router.navigate(['/Products']);
    };
    AddProductComponent = __decorate([
        core_1.Component({
            selector: 'app-AddProduct',
            templateUrl: './AddProduct.component.html',
            styleUrls: ['./AddProduct.component.scss']
        })
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
