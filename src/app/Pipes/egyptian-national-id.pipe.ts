import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egyptianNationalID'
})
export class EgyptianNationalIDPipe implements PipeTransform {

  transform(value:number,DatePart:string): any {
    var Year = +value.toString().substring(1, 3);
    var Month = value.toString().substring(3, 5)
    var Day = value.toString().substring(5, 7)
    
    var cutoff = (new Date()).getFullYear() - 2000
    
   var fullDate = (Year > cutoff ? '19' : '20') + Year + '-' + Month + '-' + Day;
    switch(DatePart)
    {
      case 'YY':
        return (Year > cutoff ? '19' : '20') + Year;
      case 'MM':
        return Month;
      case 'DD':
         return Day;
      case 'FullDate':
        return fullDate;
        default:
          return fullDate;
    }
   
    //return `${Year}  / ${Month} / ${Day}`;
  }

}
