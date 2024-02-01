import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  isSpecial = true;

  canSave = true;

  isUnchanged = true;

  
  nullCustomer = false;
  
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  
  currentClasses: Record<string, boolean> = {};
  /* . . . */
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial,
    };
  }

  currentStyles: Record<string, string> = {};
  /* . . . */
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }
  
  currentItem = {
    name: 'sriharyi',
  };

  setUppercaseName(value: string) {
    this.currentItem.name = value.toUpperCase();
    console.log(this.currentItem.name);
  }

  
    // inputValue: string = '';
  
    // setUppercase() {
    //   this.inputValue = this.inputValue.toUpperCase();
    // }
  ngOnInit() {
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

}
