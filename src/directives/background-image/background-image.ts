import { Directive, ElementRef, Input } from '@angular/core';

/**
 * Generated class for the BackgroundImageDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[background-image]' // Attribute selector
})
export class BackgroundImageDirective {

  private el:HTMLElement

  constructor(el: ElementRef) {
    this.el=el.nativeElement;
  }

@Input('background-image') backgroundImage: string;

ngAfeterViewInit(){
  this.el.style.backgroundImage = 'url(' + this.backgroundImage + ')';
}

}
