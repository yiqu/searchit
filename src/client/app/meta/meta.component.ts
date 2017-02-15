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

  constructor(public snackBar: MdSnackBar) {}

  exportExcel(message: string, action: string) {
    this.snackBar.open("Excel-1", "Download", {duration: 5000});
  }

  clearAll(message: string, action: string) {
    this.snackBar.open("Cleared all history", "Undo", {duration: 5000});
  }
}
