 import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
 import { DodecahedronComponent } from '../dodecahedron/dodecahedron.component';
 import { DeltohedronComponent } from '../deltohedron/deltohedron.component';
 import { Dice } from '../model';
 
@Component({
  selector: 'dice-panel',
  templateUrl: './dice-panel.component.html',
  styleUrls: ['./dice-panel.component.scss']
})

export class DicePanelComponent implements OnInit {

  dices: Dice[] = [
    { component: null, 
      data: {
        name: 'D4',
        value: 4,
        img: '../assets/logo.png',
        amount: 1
      }
    },
    { component: null, 
      data: {
        name: 'D6',
        value: 4,
        img: '../assets/logo.png',
        amount: 1
      }
    },
    { component: null, 
      data: { 
        name: 'D8',
        value: 4,
        img: '../assets/logo.png',
        amount: 1
      }
    },
    { component: DeltohedronComponent, 
      data: {
        name: 'D10',
        value: 4,
        model: true,
        amount: 1
      }
    },
    { component: DeltohedronComponent, 
      data: { 
        name: 'D10 in tens',
        value: 10 * 10,
        model: true,
        amount: 1
      }
    },
    { component: DodecahedronComponent, 
      data: { 
        name: 'D12',
        value: 12,
        model: true,
        amount: 1
      }
    }
  ];

  componentInjector?: Injector;

  constructor(private injector: Injector) {}

  ngOnInit() {
    this.componentInjector = Injector.create({
      providers: [
        { provide: 'data', useValue: this.dices[0].data }
      ],
      parent: this.injector
    });
  }

  changeAmount(obj: any, delta: number) {
    for (const dice of this.dices) {
      if(dice === obj && 
         dice.data.amount && 
        dice.data.amount + delta){
        dice.data.amount += delta;
      }
    };
  }
  @Output() dicesSaved = new EventEmitter();
  
  onAddDice(dice: Dice){
    console.log(dice);
    this.dicesSaved.emit(dice);
  }
}
