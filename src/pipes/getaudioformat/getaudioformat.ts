import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the GetaudioformatPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'getaudioformat',
})
export class GetaudioformatPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    var result = null;
    if (typeof value !== 'string') {
      return result;
    }
    var mime = value.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
    if (mime && mime.length) {
      result = mime[1];
    }
    var res = this.getSecondPart(result);
    return res;
  }
  getSecondPart(str) {
    return str.split('/')[1];
  }
}
