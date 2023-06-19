import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNewComponent } from './movie-new.component';

describe('MovieNewComponent', () => {
  let component: MovieNewComponent;
  let fixture: ComponentFixture<MovieNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieNewComponent]
    });
    fixture = TestBed.createComponent(MovieNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
