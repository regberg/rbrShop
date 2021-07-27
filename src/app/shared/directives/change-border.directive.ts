import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBorder]',
})
export class ChangeBorderDirective {
  @HostBinding('style.border') border: string;

  @HostListener('mouseover') setBorder() {
    this.border = '3px solid #411375';
  }

  @HostListener('mouseout') unsetBorder() {
    this.border = '3px solid #bdaec4';
  }

  constructor() {
    this.border = '3px solid #bdaec4';
  }
}
