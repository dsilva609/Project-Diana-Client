import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WishOwnedComponent } from 'src/app/wish/wish-list/wish-owned/wish-owned.component';

describe('WishOwnedComponent', () => {
  let component: WishOwnedComponent;
  let fixture: ComponentFixture<WishOwnedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WishOwnedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishOwnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
