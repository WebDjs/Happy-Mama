import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'last'
})

export class LatestPipe implements PipeTransform {
    transform(items: any[],  count:number=5) {

    return items.slice(0,count);
    }
};
