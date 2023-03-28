import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplyGeneratorComponent } from './simply-generator.component';

describe('SimplyGeneratorComponent', () => {
  let component: SimplyGeneratorComponent;
  let fixture: ComponentFixture<SimplyGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplyGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplyGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
