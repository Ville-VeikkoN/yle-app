import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value): string {
    if (typeof value === 'undefined') {
      return '';
    }
    const dateAndTime = value.split('T');
    const time = dateAndTime[1].split('+');
    return time[0];
  }

}
