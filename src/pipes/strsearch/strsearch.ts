import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the StrsearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'strsearch',
})
export class StrsearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    var result = null;
    if (value == '') {
      return result;
    } else {
      var str = value.toString().toLowerCase();
      str = str.replace(/ /g, '');
      // console.log(str);
      var sub = 'withdrawal';
      // console.log(str.includes(sub));

      result = str.includes(sub);








    }
    //console.log(result);
    return result
  }
}
