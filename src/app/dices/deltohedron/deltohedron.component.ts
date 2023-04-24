import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'deltohedron',
  templateUrl: './deltohedron.component.html',
  styleUrls: ['./deltohedron.component.scss']
})
export class DeltohedronComponent implements OnInit {
  @ViewChildren('side', {read: ElementRef}) div!: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.div.map(p => this.resizeFont(p.nativeElement))
  }
  resizeFont(p: HTMLElement) {
    const valueSide = p.dataset['value']?.length;
    if(valueSide! > 2) {
      p.style.setProperty('font-size', '0.5rem');
    }


  }
}


