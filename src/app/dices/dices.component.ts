import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dice } from './model';
import { DicesService } from '../dices.service';

@Component({
  selector: 'dices-result',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss']
})
export class DicesComponent implements OnInit {
  dices: Dice[] = [];

  constructor(private dicesService: DicesService) {}

  ngOnInit(): void {
    this.dices = this.dicesService.getDices();
  }

  @Output() diceRemoved = new EventEmitter();
  
  onRemoveDice(dice: Dice) {
    this.diceRemoved.emit(dice);
  }
  getDices(){
    return this.dices;
  }
  onGenerateResults() {
    return this.dicesService.saveResults();    
  }
}
