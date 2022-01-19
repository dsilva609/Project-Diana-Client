import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameSubmissionComponent } from 'src/app/game/submission/game-submission.component';

describe('GameSubmissionComponent', () => {
  let component: GameSubmissionComponent;
  let fixture: ComponentFixture<GameSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameSubmissionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
