import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookSearchedComponent } from 'src/app/book/book-submission/book-searched/book-searched.component';

describe('BookSearchedComponent', () => {
  let component: BookSearchedComponent;
  let fixture: ComponentFixture<BookSearchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookSearchedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
