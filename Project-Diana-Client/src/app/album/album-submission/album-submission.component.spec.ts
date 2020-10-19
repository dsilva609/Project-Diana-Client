import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumSubmissionComponent } from 'src/app/album/album-submission/album-submission.component';

describe('AlbumSubmissionComponent', () => {
  let component: AlbumSubmissionComponent;
  let fixture: ComponentFixture<AlbumSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumSubmissionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
