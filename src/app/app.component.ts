import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-root',
  template: `
   <tabe>
   <tr *ngFor="let car of cars">
   <td>{{car.make}} </td>
   <td>{{car.madel}} </td>
   <td><button (click)="showCar(car)>Click me!</button> </td>
   </tr>
   </table>
  `,
  styles: []
})
export class AppComponent {
  _cars = [new Car('car1', 2002 , 'bmw','m3',
  'https://en.wikipedia.org/wiki/BMW_M3'),
  new Car('car2', 2017 , 'acura','nsx',
  'https://en.wikipedia.org/wiki/Honda_NSX'),
  new Car('car3', 2016 , 'chevy','camaro',
  'https://en.wikipedia.org/wiki/Chevrolet_Camro')];
  showCar (car){
    const desc = car.make;
    if (window.confirm('Click"ok" to be redirected to' + car.article)){
      window.location=car.article;
    }
  }
}
