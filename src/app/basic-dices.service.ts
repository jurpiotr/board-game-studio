import { Injectable } from '@angular/core';
import { DeltohedronComponent } from './dices/deltohedron/deltohedron.component';
import { DodecahedronComponent } from './dices/dodecahedron/dodecahedron.component';
import { Dice } from './dices/model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicDicesService {

  private dices: Dice[] = [
    {
        component: null,
        data: {
          name: 'D4',
          value: 4,
          values: ['1', '2', '3','4'],
          img: '../assets/logo.png',
          amount: 0,
        },
    },
    {
        component: null,
        data: {
        name: 'D6',
        value: 6,
        values: ['1', '2', '3','4', '5','6'],
        img: '../assets/logo.png',
        amount: 0,
        },
    },
    {
        component: null,
        data: {
        name: 'D8',
        value: 8,
        values: ['1', '2', '3', '4', '5','6', '7', '8'],
        img: '../assets/logo.png',
        amount: 0,
        },
    },
    {
        component: DeltohedronComponent,
        data: {
        name: 'D10',
        value: 10,
        values: ['1', '2', '3', '4', '5','6', '7', '8', '9', '10'],
        model: true,
        amount: 0,
        },
    },
    {
        component: DeltohedronComponent,
        data: {
        name: 'D10 in tens',
        value: 10,
        values: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
        model: true,
        amount: 0,
        },
    },
    {
        component: DodecahedronComponent,
        data: {
        name: 'D12',
        value: 12,
        values: ['1', '2', '3', '4', '5','6', '7', '8', '9', '10', '11', '12'],
        model: true,
        amount: 0,
        },
    }
    ];

  dicesChanged = new Subject<void>();
  
  constructor() { }

  getDices() {
    return this.dices;
  }

  setDices(newDice: Dice) {
    this.dices.unshift(newDice);
    this.dicesChanged.next();
  }

}
