import { Pipe, PipeTransform } from '@angular/core';
/*
 * Capitalize the first letter of a string
 * Usage:
 *   value | capitalizeFirst
 * Example:
 *   {{ hi | capitalizeFirst:secondParam:thirdParam }}
 *   becomes Hi
*/
@Pipe({name: 'capitalizeFirst'})
export class CapitalizeFirst implements PipeTransform {
  transform(value: any): string {
    if (typeof(value) === "string") {
      let result = value.charAt(0).toUpperCase() + value.substring(1, value.length);
      return result;
    }
    console.log("Wrong usage of CapitalizeFirst pipe.");
    return value;
  }
}