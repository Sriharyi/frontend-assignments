import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(items: string[], searchTerm: string): string[] {
    if (!items || !searchTerm) {
      return items;
    }
    return items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
