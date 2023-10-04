import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsidebarComponent } from './insidebar.component';

describe('InsidebarComponent', () => {
  let component: InsidebarComponent;
  let fixture: ComponentFixture<InsidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsidebarComponent]
    });
    fixture = TestBed.createComponent(InsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
