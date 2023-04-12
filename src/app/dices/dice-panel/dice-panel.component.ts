import {
   Component,
   EventEmitter,
   Injector,
   Input,
   OnInit,
   OnChanges,
   Output,
   SimpleChanges,
   ChangeDetectionStrategy,
} from '@angular/core';
import { DodecahedronComponent } from '../dodecahedron/dodecahedron.component';
import { DeltohedronComponent } from '../deltohedron/deltohedron.component';
import { Dice } from '../model';

@Component({
   selector: 'dice-panel',
   changeDetection: ChangeDetectionStrategy.OnPush,
   templateUrl: './dice-panel.component.html',
	styleUrls: ['./dice-panel.component.scss'],
})
export class DicePanelComponent implements OnInit, OnChanges {
   dices: Dice[] = [
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
			value: 4,
			img: '../assets/logo.png',
			amount: 0,
      },
	},
	{
      component: null,
      data: {
			name: 'D8',
			value: 4,
			img: '../assets/logo.png',
			amount: 0,
      },
	},
	{
      component: DeltohedronComponent,
      data: {
			name: 'D10',
			value: 4,
			model: true,
			amount: 0,
      },
	},
	{
      component: DeltohedronComponent,
      data: {
			name: 'D10 in tens',
			value: 10 * 10,
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
	},
   ];

   componentInjector?: Injector;

   constructor(private injector: Injector) {}

   ngOnInit() {
      this.componentInjector = Injector.create({
      providers: [{ provide: 'data', useValue: this.dices[0].data }],
      parent: this.injector,
		});
	}

   @Input() removedDice?: Dice;
   @Output() dicesSaved = new EventEmitter();
   @Output() diceRemoved = new EventEmitter();

   ngOnChanges(changes: SimpleChanges) {
      console.log(changes['removedDice']);
      const currDice = changes['removedDice'].currentValue;
      if (!changes['removedDice'].isFirstChange()) {
			for (const dice of this.dices) {
				if (dice === currDice) {
					currDice.data.amount = 0;
				}
			}
		}
	}
   changeAmount(dice: any, delta: number = 1) {
      if (dice.data.amount !== undefined && dice.data.amount + delta >= 0) {
      dice.data.amount += delta;
			if (dice.data.amount === 0) {
				console.log('REMOVED');
				this.diceRemoved.emit(dice);
				return;
			} else {
				this.dicesSaved.emit(dice);
			}
		}
	}

   onAddDice(dice: Dice) {
      if (dice.data.amount !== undefined && dice.data.amount >= 0) {
			console.log('oppopopoppop');
			dice.data.amount += 1;
			this.dicesSaved.emit(dice);
		}
	}
}
