import { Directive, ElementRef , AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements AfterViewInit {

  constructor(private element: ElementRef) { }
  ngAfterViewInit(): void {
    let text = this.element.nativeElement.innerText;
    this.element.nativeElement.innerText = text.toUpperCase();
  }
}
