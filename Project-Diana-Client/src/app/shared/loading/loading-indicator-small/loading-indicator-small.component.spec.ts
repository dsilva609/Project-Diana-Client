import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  LoadingIndicatorSmallComponent,
} from 'src/app/shared/loading/loading-indicator-small/loading-indicator-small.component';

describe('LoadingIndicatorSmallComponent', () => {
  let component: LoadingIndicatorSmallComponent;
  let fixture: ComponentFixture<LoadingIndicatorSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingIndicatorSmallComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingIndicatorSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
