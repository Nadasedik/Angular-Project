import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard'
})
export class CreditcardPipe implements PipeTransform {

  transform(value: number): any {
    var credit=value.toString()
    credit=credit.substring(0, 4) + "-" + credit.substring(4, 8) + "-" + credit.substring(8, 12) + "-"+credit.substring(12, credit.length);
    return credit;
  }

}
