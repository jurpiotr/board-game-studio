import { ChangeDetectorRef, Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
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
  activeValue: string = '';
  activeMode: string = 'multi';
  newDiceName: string = '';

  constructor( private bDS: BasicDicesService, private cdRef: ChangeDetectorRef ) { }

  ngOnInit() {
    this.dicesCollection = this.bDS.getDices();
    this.dicesCollection.unshift(this.newDice)
  }

  modeValue() {
    return this.newDice.data!.values!.length === 0 
    ? []
    : this.activeMode !== 'single'
      ? ['']
      : this.newDice.data.values;
  }
  

  setValuesFromSides() {
    if(this.newDice.data.name === 'custom') {
      this.newDice.data.values = [];
      const arr = Array.from({length: Number(this.newDice.data.value)}, (_, i) => (i+1).toString());
      this.newDice.data.values.push(...arr);
    }
  }
  showTableValues(i: number) {
    this.componentRef = this.values.createComponent(TableValuesComponent);
    this.componentRef.instance.valueClick.subscribe((val) => {
      this.newDice.data.values?.splice(i, 1, val);
      this.cdRef.detectChanges();
      this.componentRef.destroy();
      this.activeValue = val;
      })
    this.values.insert(this.componentRef.hostView);
  }

  trackByIndex(index: number) {
    return index;
  }

  addNewDice() {
    const copyDice = JSON.parse(JSON.stringify(this.newDice));
    copyDice.data.name = this.newDiceName;
    this.bDS.setDices(copyDice);
  }

}
