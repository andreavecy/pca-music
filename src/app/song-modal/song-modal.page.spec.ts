import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SongModalPage } from './song-modal.page';

describe('SongModalPage', () => {
  let component: SongModalPage;
  let fixture: ComponentFixture<SongModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SongModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
