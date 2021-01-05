import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShowcaseListComponent } from 'src/app/showcase/showcase-list/showcase-list.component';

describe('ShowcaseListComponent', () => {
  let component: ShowcaseListComponent;
  let fixture: ComponentFixture<ShowcaseListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcaseListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
