import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-controls',
  styleUrl: './controls.css',
  templateUrl: './controls.html',
})
export class Controls {
  orderByIdClick = output<void>();
  orderByNameClick = output<void>();
  reverse = output<void>();

  OnOrderByIdClick():void {
    this.orderByIdClick.emit();
  }

  OnOrderByNameClick():void {
    this.orderByNameClick.emit();
  }

  onReverseClick():void {
    this.reverse.emit();
  }
}
