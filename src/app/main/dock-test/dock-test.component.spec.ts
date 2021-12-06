import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockTestComponent } from './dock-test.component';

describe('DockTestComponent', () => {
  let component: DockTestComponent;
  let fixture: ComponentFixture<DockTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DockTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
