import { Babysitter } from '../models/babysitter.model';

import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'filterByAge'
})
export class FilterByPowerPipe implements PipeTransform {
    transform(babysitters: Babysitter[], age: number): any[] {
        if (age === NaN) {
            return babysitters;
        }

        // return babysitters.filter(babysitter => {
        //     return !!babysitter.age.find());
        // });
    }
};
