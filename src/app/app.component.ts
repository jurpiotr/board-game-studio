import { Component } from '@angular/core';
import { Dice } from './dices/model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'board-game-studio';
  storedDices: Dice[] = [];
  diceToRemove!: Dice;

  onDiceAdded(dice: Dice) {
    let isDice = false;
    this.storedDices.forEach(d => {
      if(d.data.amount && dice == d) {
        isDice = true; 
      };
    });
    if(!isDice) this.storedDices.push(dice);
  }
  
  onDiceRemoved(dice: Dice) {
    this.storedDices.forEach((d: Dice, index: number) => {
      if(dice == d) {
        this.diceToRemove = {...dice};
        d.data.amount = 0;
        this.storedDices.splice(index, 1);
      };
    });
  }
}
