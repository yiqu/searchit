import { Pipe, PipeTransform } from '@angular/core';


/*
 * All pipes are stored here.
 * 
*/


/*
 * This pipe handles the default text inside (e.g. ... ) displayed in the main search bar.
 * The text will change based on the dropdown of what type of user or org.
 * 
 * Usage:
 * {{ user |  placeholderType}}
 * 
*/
@Pipe({name: 'placeholderType'})
export class PlaceHolderPipe implements PipeTransform {
  transform(value: String) {
    let viewValue: String;
    switch (value) {
    case 'user': // when User option is selected in the dropdown
        viewValue = "tom";
        break;
    case 'org': // when Org option is selected in the dropdown
        viewValue = "github";
        break;
    case 'anyType': // when Any option is selected in the dropdown
        viewValue = "facebook";
        break;
    default: 
      viewValue = 'unicorn';
    }
    return viewValue; 
  }
}


/*
 * This pipe handles the first part default text displayed in the main search bar.
 * Enter a ... (org, user, or any are the choices)
 * 
 * Usage:
 * {{ search.type |  ViewValuePipe}}
 * 
*/
@Pipe({name: 'ViewValue'})
export class ViewValuePipe implements PipeTransform {
  transform(value: String) {
    let viewValue: String;
    switch (value) {
    case 'user':
        viewValue = "a user";
        break;
    case 'org':
        viewValue = "an organization";
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