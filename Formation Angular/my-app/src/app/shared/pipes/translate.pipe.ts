import { Pipe, PipeTransform } from "@angular/core";
import { PipeDecorator } from "@angular/core/src/metadata/directives";

@Pipe({
  name:'translate'
})
export class TranslatePipe implements PipeTransform {
  mapTransform = {
    'srch' : {
      en : 'Search',
      fr : 'Rechercher'
    }
  }
  transform(key:string, lang: string){
    return this.mapTransform[key] ? this.mapTransform[key][lang] : undefined;
  }
}
