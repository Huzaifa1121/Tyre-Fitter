import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureJobFormComponent } from './future-job-form.component';

describe('FutureJobFormComponent', () => {
  let component: FutureJobFormComponent;
  let fixture: ComponentFixture<FutureJobFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutureJobFormComponent]
    });
    fixture = TestBed.createComponent(FutureJobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
