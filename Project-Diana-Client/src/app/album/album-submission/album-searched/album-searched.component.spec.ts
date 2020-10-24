import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumSearchedComponent } from 'src/app/album/album-submission/album-searched/album-searched.component';

describe('AlbumSearchedComponent', () => {
  let component: AlbumSearchedComponent;
  let fixture: ComponentFixture<AlbumSearchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumSearchedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
