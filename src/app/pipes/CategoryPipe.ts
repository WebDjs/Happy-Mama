import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'category'
})

export class CategoryPipe implements PipeTransform {
    transform(items: any[], categoryName:string) {
    return items.filter(item=>item.category === categoryName)
    }
};