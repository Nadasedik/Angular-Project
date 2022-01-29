import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ADsService {
private ADsArray:string[]
constructor() { 
  this.ADsArray=['welcome To Our Page','There is aBig Sale'
  ,'70% Discount for first 100 client','Delivery free','New and Excellent Products']
}

DisplayAds(time:number):Observable<string>
{
  return new Observable<string>((observer)=>{
    let counter=0;

    let AdsTimer=setInterval(()=>{
      if(counter==this.ADsArray.length)
      {
        observer.complete()
      }

      if(this.ADsArray[counter]=="")
      {
        observer.error("no ADs Now")
      }
      observer.next(this.ADsArray[counter])
      counter++;
    },time*1000)

    return{
      unsubscribe()
      {
        clearInterval(AdsTimer)
        console.log("expired")
      }
    }
  }
  )
}

}
