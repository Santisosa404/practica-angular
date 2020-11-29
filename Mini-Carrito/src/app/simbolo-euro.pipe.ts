import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simboloEuro'
})
export class SimboloEuroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value +'€'
  }

}
