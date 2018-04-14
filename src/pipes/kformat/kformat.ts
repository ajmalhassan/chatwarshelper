import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the KformatPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'kformat',
})
export class KformatPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, ...args) {
    return value > 999 || value < -999 ? (value/1000).toFixed(1) + 'k' : value
  }
}
