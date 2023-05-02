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
import { BasicDicesService } from 'src/app/basic-dices.service';

@Component({
   selector: 'dice-panel',
   changeDetection: ChangeDetectionStrategy.OnPush,
   templateUrl: './dice-panel.component.html',
	styleUrls: ['./dice-panel.component.scss'],
})
export class DicePanelComponent implements OnInit, OnChanges {
   
   dices: Dice[] = [];
   componentInjector?: Injector;

   constructor(private bDS: BasicDicesService, private injector: Injector) {}

   ngOnInit() {
      this.dices = this.bDS.getDices();
      this.componentInjector = Injector.create({
      providers: [{ provide: 'data', useValue: this.dices[0].data }],
      parent: this.injector,
		});
	}

   @Input() removedDice?: Dice;
   @Output() dicesSaved = new EventEmitter();
   @Output() diceRemoved = new EventEmitter();

   ngOnChanges(changes: SimpleChanges) {
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
				this.diceRemoved.emit(dice);
				return;
			} else {
				this.dicesSaved.emit(dice);
			}
		}
	}

   onAddDice(dice: Dice) {
      if (dice.data.amount !== undefined && dice.data.amount >= 0) {
			dice.data.amount += 1;
			this.dicesSaved.emit(dice);
		}
	}
}
