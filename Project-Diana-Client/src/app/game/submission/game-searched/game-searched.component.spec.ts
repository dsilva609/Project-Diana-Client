import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameSearchedComponent } from 'src/app/game/submission/game-searched/game-searched.component';

describe('GameSearchedComponent', () => {
  let component: GameSearchedComponent;
  let fixture: ComponentFixture<GameSearchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameSearchedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
