import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FormatConvert pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'formatx',
})
export class FormatConvert  {
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
  return result;
    //return value.toLowerCase();
  }
}
