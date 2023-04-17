import { Component, OnInit } from '@angular/core';
import { DicesService } from 'src/app/dices.service';

@Component({
  selector: 'simply-generator',
  templateUrl: './simply-generator.component.html',
  styleUrls: ['./simply-generator.component.scss']
})
export class SimplyGeneratorComponent implements OnInit {
  results: Array<any> = [];
  constructor(private dicesService: DicesService) { }

  ngOnInit(): void {
    this.results = this.dicesService.getResults();
  }
  onClearResults() {
    this.dicesService.clearResults();
    this.results = this.dicesService.getResults();
  }
}
