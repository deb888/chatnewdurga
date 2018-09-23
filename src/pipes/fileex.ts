import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Fileex pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'fileex',
})
export class Fileex implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    var result = null;
    if (typeof value !== 'string') {
      return result;
    }
    let res = this.getSecondPart(value);
    return res;
  }
  getSecondPart(str) {
    let res = str.substr(str.indexOf(".") + 1);
    return res;

  }
}
