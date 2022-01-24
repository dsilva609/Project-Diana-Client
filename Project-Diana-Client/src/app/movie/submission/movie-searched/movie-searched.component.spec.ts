import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieSearchedComponent } from 'src/app/movie/submission/movie-searched/movie-searched.component';

describe('MovieSearchedComponent', () => {
  let component: MovieSearchedComponent;
  let fixture: ComponentFixture<MovieSearchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieSearchedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
