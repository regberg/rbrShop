import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBorder]'
})
export class ChangeBorderDirective {

  @HostBinding('style.border') border: string;

  @HostListener('focus') setBorder() {
    this.border = '3px solid #e0b7cf';
  }

  @HostListener('focusout') unsetBorder() {
    this.border = '3px solid #e7dee3';
  }

  constructor() {
    this.border = '3px solid #e7dee3';
  }

}
