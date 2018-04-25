import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'plural'
})
export class PluralPipe implements PipeTransform {
  transform(str:string, nb:Number) {
    return str + (nb > 1 ? 's' : '');
  }
}
