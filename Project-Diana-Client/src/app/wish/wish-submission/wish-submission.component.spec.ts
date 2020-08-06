import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishSubmissionComponent } from './wish-submission.component';

describe('WishSubmissionComponent', () => {
  let component: WishSubmissionComponent;
  let fixture: ComponentFixture<WishSubmissionComponent>;

  beforeEach(async(() => {
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
