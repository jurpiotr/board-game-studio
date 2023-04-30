import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'table-values',
  templateUrl: './table-values.component.html',
  styleUrls: ['./table-values.component.scss'],
})
export class TableValuesComponent implements OnInit {
  tableValues = [
    8226,
    8227,
    8230,
    8251,
    8258,
    8273,
    8270,
    8277,
    8592,
    8593,
    8594,
    8595,
    8596,
    8597,
    8598,
    8599,
    8600,
    8601,
    8634,
    8635,
    8986,
    8987,
    9055,
    9059,
    9728,
    9729,
    9730,
    9731,
    9732,
    9733,
    9734,
    9742,
    9743,
    9744,
    9745,
    9746,
    9752,
    9760,
    9762,
    9763,
    9775,
    9788,
    9789,
    9812,
    9813,
    9814,
    9815,
    9816,
    9817,
    9818,
    9819,
    9820,
    9821,
    9822,
    9823,
    9834,
    9876,
    9872,
    9919,
    9960,
    10025,
    10026,
    10027,
    10028,
    10029,
    10030,
    10031,
    10032,
    10033,
    10034,
    10035,
    10036,
    10037,
    10038,
    10039,
    10040,
    10041,
    10042,
    10043,
    10044,
    10045,
    10046,
    10047,
    10048,
    10049,
    10050,
    10051,
    10052,
    10053,
    10054,
    10055,
    10056,
    10057,
    10058,
    10059
  ];

  @Output() valueClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onValueClick(value: number) {
    this.valueClick.emit(value);
  }

}