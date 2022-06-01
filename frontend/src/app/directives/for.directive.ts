import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers!: number[]

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
    ) { 

  }

  ngOnInit(): void {
    for(let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number })
    }
  }

}

// EXEMPLO DE COMO USAR ISSO NO HTML:
// <ul>
//   <li *myFor="let n em [1, 2, 3]">{{ n }}</li>
// </ul>
