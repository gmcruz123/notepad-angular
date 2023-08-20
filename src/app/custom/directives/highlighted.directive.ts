import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') Enter() {
    this.el.nativeElement.style.backgroundColor = '#2291c9';
  }

  @HostListener('mouseleave') Leave() {
    this.el.nativeElement.style.backgroundColor = '#ffffff';
  }

}
