"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDetailsComponent = void 0;
var core_1 = require("@angular/core");
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(activatedRoute, prodService, location, router) {
        this.activatedRoute = activatedRoute;
        this.prodService = prodService;
        this.location = location;
        this.router = router;
        this.PrdID = 0;
        this.Products = null;
        this.CprodId = 0;
        this.AllProduct = [];
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AllProduct = this.prodService.getAllProdductIDS();
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            _this.CprodId = Number(paramMap.get('pid'));
            _this.Products = _this.prodService.gitProductByID(_this.CprodId);
        });
    };
    ProductDetailsComponent.prototype.Back = function () {
        this.location.back();
    };
    ProductDetailsComponent.prototype.Prev = function () {
        var _this = this;
        var CPrd = this.AllProduct.findIndex(function (ele) { return ele == _this.CprodId; });
        var prevPrd;
        if (CPrd > 0) {
            prevPrd = this.AllProduct[CPrd - 1];
            this.router.navigate(['/Products', prevPrd]);
        }
    };
    ProductDetailsComponent.prototype.Next = function () {
        var _this = this;
        var CPrd = this.AllProduct.findIndex(function (ele) { return ele == _this.CprodId; });
        var nextPrd;
        if (CPrd < this.AllProduct.length) {
            nextPrd = this.AllProduct[CPrd + 1];
            this.router.navigate(['/Products', nextPrd]);
        }
    };
    ProductDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-ProductDetails',
            templateUrl: './ProductDetails.component.html',
            styleUrls: ['./ProductDetails.component.scss']
        })
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
