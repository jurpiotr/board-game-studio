import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicePanelComponent } from './dice-panel.component';

describe('DicePanelComponent', () => {
  let component: DicePanelComponent;
  let fixture: ComponentFixture<DicePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DicePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
