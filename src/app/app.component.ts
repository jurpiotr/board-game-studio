import { Component } from '@angular/core';
import { Dice } from './dices/model';
import { DicesService } from './dices.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'board-game-studio';
  storedDices: Dice[] = [];
  diceToRemove!: Dice;

  constructor(private dicesService: DicesService) {}
  
  ngOnInit(): void {
    this.storedDices = this.dicesService.getDices();
  }

  onDiceAdded(dice: Dice) {
    this.dicesService.addDices(dice)
  }
  
  onDiceRemoved(dice: Dice) {
    this.diceToRemove = this.dicesService.removeDices(dice);
  }
}
