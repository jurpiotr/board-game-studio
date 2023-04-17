import { Injectable } from '@angular/core';
import { Dice, ResultDice} from './dices/model';

@Injectable({
  providedIn: 'root'
})
export class DicesService {
  private dices: Dice[] = [];
  private results: Array<ResultDice[]> = []
  diceToRemove!: Dice;
  constructor() { }

  getDices() {
    return this.dices;
  }
  getResults() {
    return this.results;
  }

  addDices(dice: Dice) {
    let isDice = false;
    this.dices.forEach(d => {
      if(d.data.amount && dice == d) {
        isDice = true; 
      };
    });
    if(!isDice) this.dices.push(dice);
  }

  removeDices(dice: Dice): Dice {
    this.dices.forEach((d: Dice, index: number) => {
      if(dice == d) {
        d.data.amount = 0;
        this.dices.splice(index, 1);
        this.diceToRemove = {...dice};
      };
    });
    return this.diceToRemove;
  }

  saveResults() {
    let dataDices: ResultDice[] = [];
    
    this.dices.map((dice, key) => {
      if(dice.data.value)
        dataDices.push({
        ...dice.data, 
        valuesDice: this.getRandomValue(dice.data.value)});
    })
    this.results.unshift(dataDices);
  }

  getRandomValue(val:number) {
    return ( Math.floor(Math.random() * val) + 1 )
  }

  clearResults() {
    this.results = [];
    
  }
}
