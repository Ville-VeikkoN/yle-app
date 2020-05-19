import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (typeof value === 'undefined') {
      return '';
    }
    const dateAndTime = value.split('T');
    const date = dateAndTime[0].split('-');
    return date[2] + '.' + date[1] + '.' + date[0];
  }

}
