import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillQuoteFormComponent } from './fill-quote-form.component';

describe('FillQuoteFormComponent', () => {
  let component: FillQuoteFormComponent;
  let fixture: ComponentFixture<FillQuoteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FillQuoteFormComponent]
    });
    fixture = TestBed.createComponent(FillQuoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
