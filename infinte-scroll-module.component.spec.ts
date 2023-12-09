import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinteScrollModuleComponent } from './infinte-scroll-module.component';

describe('InfinteScrollModuleComponent', () => {
  let component: InfinteScrollModuleComponent;
  let fixture: ComponentFixture<InfinteScrollModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfinteScrollModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfinteScrollModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
