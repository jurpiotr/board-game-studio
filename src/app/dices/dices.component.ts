import { Component, Input, OnInit } from '@angular/core';
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
  @Input() dices: Dice[] = []
}
