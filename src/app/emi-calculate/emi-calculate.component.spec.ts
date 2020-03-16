import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiCalculateComponent } from './emi-calculate.component';

describe('EmiCalculateComponent', () => {
  let component: EmiCalculateComponent;
  let fixture: ComponentFixture<EmiCalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmiCalculateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
