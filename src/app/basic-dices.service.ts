import { Injectable } from '@angular/core';
import { DeltohedronComponent } from './dices/deltohedron/deltohedron.component';
import { DodecahedronComponent } from './dices/dodecahedron/dodecahedron.component';
import { Dice } from './dices/model';

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
          img: '../assets/logo.png',
          amount: 0,
        },
    },
    {
        component: null,
        data: {
        name: 'D6',
        value: 6,
        img: '../assets/logo.png',
        amount: 0,
        },
    },
    {
        component: null,
        data: {
        name: 'D8',
        value: 8,
        img: '../assets/logo.png',
        amount: 0,
        },
    },
    {
        component: DeltohedronComponent,
        data: {
        name: 'D10',
        value: 10,
        model: true,
        amount: 0,
        },
    },
    {
        component: DeltohedronComponent,
        data: {
        name: 'D10 in tens',
        values: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        model: true,
        amount: 0,
        },
    },
    {
        component: DodecahedronComponent,
        data: {
        name: 'D12',
        value: 12,
        model: true,
        amount: 0,
        },
    }
    ];

  constructor() { }

  getDices() {
    return this.dices;
  }

}
