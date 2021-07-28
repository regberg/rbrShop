import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBackgroundColor]',
})
export class ChangeBackgroundColorDirective {
  @HostBinding('style.background-color') backgroundColor: string;

  @HostListener('mouseover') setBackgroundColor() {
    this.backgroundColor = '#cebee9';
  }

  @HostListener('mouseout') unsetBackgroundColor() {
    this.backgroundColor = '#bdaec4';
  }

  constructor() {
    this.backgroundColor = '#bdaec4';
  }
}
