import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the GetfilenmPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'getfilenm',
})
export class GetfilenmPipe implements PipeTransform {
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
    let res = str.substr(0, str.indexOf('.'));

    return res;

  }
}
