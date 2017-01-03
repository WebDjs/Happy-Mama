import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'last'
})

export class LatestPipe implements PipeTransform {
    transform(items: any[], date:string, count:number=5) {
      console.log(items)
    console.log(date)
    var sorted = items.sort((x:Date, y:Date)=>{

        return (y[date]-x[date])
            //     });
    })
            // return items.sort((x:Date, y:Date) => {
            //         return (y[date]-x[date])
            //     });

    console.log(sorted)

    return sorted.slice(0,count);

    }
};
