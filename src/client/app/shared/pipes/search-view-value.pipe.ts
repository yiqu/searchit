import { Pipe, PipeTransform } from '@angular/core';
/*
 * Display the server's status based on the color it returns
 * Usage:
 *   value | status
 * Example:
 *   {{ true |  enabled}}
 *   formats to ENABLED
*/
@Pipe({name: 'placeholderType'})
export class PlaceHolderPipe implements PipeTransform {
  transform(value: String) {
    let viewValue: String;
    switch (value) {
    case 'user':
        viewValue = "tom";
        break;
    case 'org':
        viewValue = "github";
        break;
    case 'anyType':
        viewValue = "javascript";
        break;
    default: 
      viewValue = 'unicorn';
    }
    return viewValue; 
  }
}

@Pipe({name: 'ViewValuePipe'})
export class ViewValuePipe implements PipeTransform {
  transform(value: String) {
    let viewValue: String;
    switch (value) {
    case 'user':
        viewValue = "user";
        break;
    case 'org':
        viewValue = "organization";
        break;
    case 'anyType':
        viewValue = "any";
        break;
    default: 
      viewValue = '';
    }
    return viewValue; 
  }
}