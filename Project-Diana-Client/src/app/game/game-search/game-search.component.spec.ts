import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameSearchComponent } from 'src/app/game/game-search/game-search.component';

describe('GameSearchComponent', () => {
  let component: GameSearchComponent;
  let fixture: ComponentFixture<GameSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
