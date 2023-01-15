import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PentagonalTrapezohedronComponent } from './pentagonal-trapezohedron.component';

describe('PentagonalTrapezohedronComponent', () => {
  let component: PentagonalTrapezohedronComponent;
  let fixture: ComponentFixture<PentagonalTrapezohedronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PentagonalTrapezohedronComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PentagonalTrapezohedronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
