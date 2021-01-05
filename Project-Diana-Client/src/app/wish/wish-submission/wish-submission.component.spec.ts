import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WishSubmissionComponent } from './wish-submission.component';

describe('WishSubmissionComponent', () => {
  let component: WishSubmissionComponent;
  let fixture: ComponentFixture<WishSubmissionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WishSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
