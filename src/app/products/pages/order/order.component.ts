import { Component } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

public isUpperCase: boolean = false;
public orderBy!: keyof Hero;

public heroes: Hero[] = [
  {
    name: '',
    canFly: true,
    color: Color.blue
  },
  {
    name: 'Batman',
    canFly: false,
    color: Color.black
  },
  {
    name: 'Robin',
    canFly: false,
    color: Color.green
  },
  {
    name: 'Daredevil',
    canFly: false,
    color: Color.red
  },
  {
    name: 'Linterna Verde',
    canFly: true,
    color: Color.green
  }
]

ToggleUpperCase(): void {
  this.isUpperCase = !this.isUpperCase
}

changeOrder(value: keyof Hero){
  this.orderBy = value;
}

}
