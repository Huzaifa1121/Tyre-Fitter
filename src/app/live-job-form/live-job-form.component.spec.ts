import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveJobFormComponent } from './live-job-form.component';

describe('LiveJobFormComponent', () => {
  let component: LiveJobFormComponent;
  let fixture: ComponentFixture<LiveJobFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveJobFormComponent]
    });
    fixture = TestBed.createComponent(LiveJobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
