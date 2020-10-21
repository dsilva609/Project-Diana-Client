import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noDate',
})
export class NoDatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value === '1900-01-01T00:00:00' ||
      value === '0001-01-01T00:00:00' ||
      value === 'Jan 1, 1900' ||
      value === 'Jan 1, 1'
      ? 'N/A'
      : value;
  }
}
