import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieSearchComponent } from 'src/app/movie/movie-search/movie-search.component';

describe('MovieSearchComponent', () => {
  let component: MovieSearchComponent;
  let fixture: ComponentFixture<MovieSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
