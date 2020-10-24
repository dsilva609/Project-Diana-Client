import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumSearchComponent } from 'src/app/album/search/album-search.component';

describe('SearchComponent', () => {
  let component: AlbumSearchComponent;
  let fixture: ComponentFixture<AlbumSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
