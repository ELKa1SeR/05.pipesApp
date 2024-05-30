import { Component } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
public isUpperCase: boolean = false;

ToggleUpperCase(): void {
  this.isUpperCase = !this.isUpperCase
}

}
