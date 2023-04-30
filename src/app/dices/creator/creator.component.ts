import { Component, ComponentRef, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TableValuesComponent } from '../table-values/table-values.component';
import { newDice } from '../model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {

  myEmoji = String.fromCodePoint(8913);

  @ViewChild('values', {read: ViewContainerRef}) values!: ViewContainerRef;
  componentRef!: ComponentRef<TableValuesComponent>;
  
  newDice: newDice = {
    values: [312,1373]
  }
  constructor() { }

  ngOnInit() { }

  showTableValues(idRef: string) {
    this.componentRef = this.values.createComponent(TableValuesComponent);
    this.componentRef.instance.valueClick.subscribe(($event) => {
      this.changeValue($event, idRef);
    })
    this.values.insert(this.componentRef.hostView);
  }

  changeValue($event: number, idRef: string) {
    if($event !== 0){
      const numId = parseInt(idRef)
      this.newDice.values[numId] = $event;
    
    }
    this.componentRef.destroy();
  }
}
