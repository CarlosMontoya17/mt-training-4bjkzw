import { Pipe, PipeTransform } from '@angular/core';
import { Farm } from './mt-sample-exercise/farm';

@Pipe({
  name: 'SearchFilter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    switch (args) {
      case 'none':
        return value;
      case 'no':
        return value.filter((i: Farm) => i.FarmNo.startsWith('100'));
      case 'year':
        return value.filter((i: Farm) =>
          i.ActiveDate.toString().startsWith('2020')
        );
    }
  }
}
