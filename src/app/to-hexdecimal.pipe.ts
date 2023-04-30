import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toHexdecimal'
})
export class ToHexdecimalPipe implements PipeTransform {

  transform(codePoint: number) {
    return String.fromCodePoint(codePoint);
  }

}
