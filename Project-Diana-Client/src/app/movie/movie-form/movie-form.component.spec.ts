import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieFormComponent } from 'src/app/movie/movie-form/movie-form.component';

describe('MovieFormComponent', () => {
  let component: MovieFormComponent;
  let fixture: ComponentFixture<MovieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
