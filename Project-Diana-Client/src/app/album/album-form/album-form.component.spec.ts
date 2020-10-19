import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumFormComponent } from 'src/app/album/album-form/album-form.component';

describe('AlbumFormComponent', () => {
  let component: AlbumFormComponent;
  let fixture: ComponentFixture<AlbumFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
