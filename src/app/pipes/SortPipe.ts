import { Pipe, PipeTransform } from '@angular/core';

function sortAsc(x: string, y: string) {
    return x.localeCompare(y);
}

function sortDesc(x: string, y: string) {
    return y.localeCompare(x);
}

@Pipe({
    name: 'sort'
})

export class SortPipe implements PipeTransform {
    transform(items: any[], isDesc:boolean = false, sortBy?: string) {
                console.log('sorting');
        console.log(items);
        console.log(sortBy);
        if (sortBy) {
                console.log(sortBy);
            if (isDesc) {
                    console.log(isDesc);
                return items.sort((x, y) => {
                    return sortDesc(x[sortBy].toString(), y[sortBy].toString(), )
                });
            } else {
                return items.sort((x, y) => {
                    return sortAsc(x[sortBy].toString(), y[sortBy].toString(), )
                });

            }

        }
        
        let compareFunc = isDesc ? sortDesc : sortAsc;
        return items.sort(compareFunc);
    }
};
