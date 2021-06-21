import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyFirstDirective]'
})
export class MyFirstDirectiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('orange');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
