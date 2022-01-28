"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StaticProductService = void 0;
var core_1 = require("@angular/core");
var StaticProductService = /** @class */ (function () {
    function StaticProductService() {
        this.ProductList = [{ ID: 1, Name: "dress", Quantity: 30, Price: 150, Image: 'https://picsum.photos/id/1014/300/250', CateogryID: 1 },
            { ID: 2, Name: "Apple", Quantity: 10, Price: 40000, Image: 'https://picsum.photos/id/48/300/250', CateogryID: 3 },
            { ID: 3, Name: "table", Quantity: 9, Price: 4000, Image: 'https://picsum.photos/id/1068/300/250', CateogryID: 2 },
            { ID: 4, Name: "LG", Quantity: 13, Price: 30000, Image: 'https://picsum.photos/id/20/300/250', CateogryID: 3 },
            { ID: 5, Name: "T-shirt", Quantity: 1, Price: 100, Image: 'https://picsum.photos/id/1059/300/250', CateogryID: 1 },
            { ID: 6, Name: "Lenovo", Quantity: 20, Price: 25000, Image: 'https://picsum.photos/id/445/300/250', CateogryID: 3 },
            { ID: 7, Name: "skirt", Quantity: 0, Price: 100, Image: 'https://picsum.photos/id/535/300/250', CateogryID: 1 },
            { ID: 8, Name: "Dell", Quantity: 16, Price: 20000, Image: 'https://picsum.photos/id/0/300/250', CateogryID: 3 }
        ];
    }
    StaticProductService.prototype.getAllProduct = function () {
        return this.ProductList;
    };
    StaticProductService.prototype.getProductBtCatID = function (SCatgID) {
        if (SCatgID == 0)
            return this.ProductList;
        else {
            var cat = this.ProductList.filter(function (prd) {
                return prd.CateogryID == SCatgID;
            });
            console.log(cat);
            return cat;
        }
    };
    StaticProductService.prototype.gitProductByID = function (prdID) {
        var exist = this.ProductList.find(function (prd) { return prd.ID == prdID; });
        if (exist) {
            return exist;
        }
        else {
            return null;
        }
    };
    StaticProductService.prototype.getAllProdductIDS = function () {
        var prdid = this.ProductList.map(function (prd) { return prd.ID; });
        return prdid;
    };
    StaticProductService.prototype.addProduct = function (prd) {
        this.ProductList.push(prd);
    };
    StaticProductService.prototype.UpdateProducts = function (id, prd) {
        var pID = this.ProductList.findIndex;
    };
    StaticProductService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], StaticProductService);
    return StaticProductService;
}());
exports.StaticProductService = StaticProductService;
