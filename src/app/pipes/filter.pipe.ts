import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText?: string): any[] {

    if (searchText === undefined) { return items; }

    return items.filter( it => {
          return it.nombre.toLowerCase().includes(searchText.toLowerCase());
        });
      }
}
