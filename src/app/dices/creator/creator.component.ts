import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TableValuesComponent } from '../table-values/table-values.component';
import { Dice } from '../model';
import { BasicDicesService } from 'src/app/basic-dices.service';

@Component({
  selector: 'creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {

  @ViewChild('values', {read: ViewContainerRef}) values!: ViewContainerRef;
  componentRef!: ComponentRef<TableValuesComponent>;
  
  dicesCollection: Dice[] =  [];

  newDice: Dice = {
    component: null,
    data: {
      name: 'custom',
      values: []
    }
  }

  constructor( private bDS: BasicDicesService ) { }

  ngOnInit() {
    this.dicesCollection = this.bDS.getDices();
    this.dicesCollection.unshift(this.newDice)
  }

  showTableValues(idRef: string) {
    this.componentRef = this.values.createComponent(TableValuesComponent);
    this.componentRef.instance.valueClick.subscribe(($event) => {
      this.changeValue($event, idRef);
    })
    this.values.insert(this.componentRef.hostView);
  }

  changeValue($event: number, idRef: string) {
    if($event !== 0 && this.newDice.data.values){
      const numId = parseInt(idRef)
      this.newDice.data.values[numId] = $event;
    
    }
    this.componentRef.destroy();
  }

  onValueChange(newVal: any, index: any) {
    if(this.newDice.data.values){
    this.newDice.data.values[index] = newVal;
    }
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }



}
