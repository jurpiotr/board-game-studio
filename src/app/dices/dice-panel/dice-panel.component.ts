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
   ChangeDetectorRef,
} from '@angular/core';
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

   constructor(private bDS: BasicDicesService, private cdRef: ChangeDetectorRef, private injector: Injector) {}

   ngOnInit() {
      this.dices = this.bDS.getDices();
      this.componentInjector = Injector.create({
      providers: [{ provide: 'data', useValue: this.dices[0].data }],
      parent: this.injector,
		});

      this.bDS.dicesChanged.subscribe(() => {
         this.refreshComponent();
      })
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
   refreshComponent() {
      this.dices = this.bDS.getDices();
      this.cdRef.detectChanges();
      console.log(this.dices)
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
