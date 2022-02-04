import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/IProduct';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsAPIService {
httpOption;
//private   ProductList:IProduct[]=[];

constructor(private httpClient:HttpClient) { 

this.httpOption={
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
};
}
getAllProducts():Observable<IProduct[]>
{
  return this.httpClient.get<IProduct[]>(`${environment.APIURL}/Products`)
}

// getAllProductsID():Observable<number[]>
// {
//   return this.httpClient.get<IProduct[]>.map(prd=>prd.ID)
// }
// getAllProdductIDS():any
//   {
//     let r= this.httpClient.get<IProduct[]>(`${environment.APIURL}/Products`)
//     r.forEach(prd=>{
//       return prd.findIndex
//     })
//     console.log(r)
//     return r
//     // let prdid:number[]=this.httpClient..get<IProduct[]>map(prd=>prd.id)
//     // return prdid
//   }
// getAllProdductIDS():number[]
//   {
//     let prdid:number[]=this.ProductList.map(prd=>prd.id)
//     console.log(prdid)
//     return prdid
//   }
getProductByID(id:number):Observable<IProduct>
{ 
  return this.httpClient.get<IProduct>(`${environment.APIURL}/Products/${id}`)
}

getProductByCatID(cid:number):Observable<IProduct[]>
{
  if(cid==0)
  return this.httpClient.get<IProduct[]>(`${environment.APIURL}/Products`)
  else
  {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/Products?CateogryID=${cid}`)
  }
}

AddProduct(prd:IProduct):Observable<IProduct>
{
  return this.httpClient.post<IProduct>(`${environment.APIURL}/Products`, JSON.stringify(prd), this.httpOption)
}

deleteProduct(id:number):Observable<IProduct>
{
  return this.httpClient.delete<IProduct>(`${environment.APIURL}/Products/${id}`,this.httpOption)
}

updateProduct(id:number,prd:IProduct):Observable<IProduct>
{
  return this.httpClient.put<IProduct>(`${environment.APIURL}/Products/${id}`
  ,JSON.stringify(prd),this.httpOption)

}
}

