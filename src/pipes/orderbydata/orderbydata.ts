import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the OrderbydataPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'orderbydata',
})
export class OrderbydataPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(records: Array<any>, args?: any): any {
    if (records !== undefined) {
      return records.sort(function (a, b) {
        if (parseFloat(a[args.property]) < parseFloat(b[args.property])) {
          return -1 * args.direction;
        }
        else if (parseFloat(a[args.property]) > parseFloat(b[args.property])) {
          return 1 * args.direction;
        }
        else {
          return 0;
        }
      });
    };
  }
}
