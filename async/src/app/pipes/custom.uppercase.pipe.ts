import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:"customuppercase"})
export class customUppercasePipe implements PipeTransform {
    transform(value: any[], fromTo: string) {
        if(!fromTo) {
            throw 'argument cannot be empty';
        }
        return value.toString().toUpperCase();
    }
};