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

  onDiceAdded(dice: Dice) {
    let isDice = false;
    this.storedDices.forEach(d => {
      if(d.data.amount && dice == d) {
        isDice = true; 
        d.data.amount += 1;
        console.log(d)
      };
    });
    if(!isDice) this.storedDices.push(dice);
  }
}
