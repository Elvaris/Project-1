import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoServiceComponent } from './photo-service.component';

describe('PhotoServiceComponent', () => {
  let component: PhotoServiceComponent;
  let fixture: ComponentFixture<PhotoServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
