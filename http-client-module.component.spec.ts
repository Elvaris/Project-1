import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModuleComponent } from './http-client-module.component';



describe('HttpClientModuleComponent', () => {
  let component: HttpClientModuleComponent;
  let fixture: ComponentFixture<HttpClientModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpClientModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpClientModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
