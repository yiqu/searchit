import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';

/**
 * This class represents the Meta Component
 */
@Component({
  moduleId: module.id,
  selector: 'sd-meta',
  templateUrl: 'meta.component.html',
  styleUrls: ['meta.component.css']
})
export class MetaComponent { 


  /**
   * Constructor
   * 
   * @param {MdSnackBar} snackBar - injected Material Snackbar comp.
   * 
   */
  constructor(public snackBar: MdSnackBar) {}


  /**
   * Snackbar action for exporting to Excel
   * 
   * @param {string} message - message displayed
   * @param {string} action - action taken when clicked
   */
  exportExcel(message: string, action: string): void {
    this.snackBar.open("Excel-1", "Download", {duration: 5000});
  }


  /**
   * Snackbar action for clear all
   * 
   */
  clearAll(): void {
    this.snackBar.open("Cleared all history", "Undo", {duration: 5000});
  }
}
