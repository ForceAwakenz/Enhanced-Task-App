import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockTestSortComponent } from './dock-test-sort.component';

describe('DockTestSortComponent', () => {
  let component: DockTestSortComponent;
  let fixture: ComponentFixture<DockTestSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockTestSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DockTestSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
