import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dice } from './model';

@Component({
  selector: 'dices-result',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss']
})
export class DicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() dices: Dice[] = [];

  @Output() diceRemoved = new EventEmitter();
  
  onRemoveDice(dice: Dice) {
    this.diceRemoved.emit(dice);
  }
}
