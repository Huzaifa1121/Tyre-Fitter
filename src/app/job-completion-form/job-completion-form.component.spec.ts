import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCompletionFormComponent } from './job-completion-form.component';

describe('JobCompletionFormComponent', () => {
  let component: JobCompletionFormComponent;
  let fixture: ComponentFixture<JobCompletionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobCompletionFormComponent]
    });
    fixture = TestBed.createComponent(JobCompletionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
