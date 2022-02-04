import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ICategory} from './../ViewModels/ICategory'
@Injectable({
  providedIn: 'root'
})
export class CategoryAPIService {

  httpOption;

  constructor(private httpClient:HttpClient) { 
  
  this.httpOption={
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  };
  }


  getAllCategories():Observable<ICategory[]>
  {
    return this.httpClient.get<ICategory[]>(`${environment.APIURL}/categories`) 
  }
}
