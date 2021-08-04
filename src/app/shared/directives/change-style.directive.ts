import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeStyle]'
})
export class ChangeStyleDirective {

  @HostBinding('style.border') border: string;
  @HostBinding('style.color') color: string;
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('focus') setStyle() {
    this.border = '3px solid #e0b7cf';
    this.color = "#915da5";
    this.backgroundColor = "#f0d8e5";
  }

  @HostListener('focusout') unsetStyle() {
    this.border = '3px solid #e7dee3';
    this.color = "#915da5";
    this.backgroundColor = "#f0d8e5";
  }

  constructor() {
    this.border = '3px solid #e7dee3';
    this.color = "#915da5";
    this.backgroundColor = "#f0d8e5";
  }

}
