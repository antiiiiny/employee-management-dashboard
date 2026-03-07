import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightSalary]',
  standalone: false
})
export class HighlightSalaryDirective implements OnInit {
  @Input('appHighlightSalary') salary!: number;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.salary >= 100000) {
      this.el.nativeElement.style.backgroundColor = '#e8f5e8'; // Light green
      this.el.nativeElement.style.borderLeft = '4px solid #4caf50'; // Green border
    }
  }
}