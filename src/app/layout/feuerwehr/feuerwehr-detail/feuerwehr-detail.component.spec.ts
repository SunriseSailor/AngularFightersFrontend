import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuerwehrDetailComponent } from './feuerwehr-detail.component';

describe('FeuerwehrDetailComponent', () => {
  let component: FeuerwehrDetailComponent;
  let fixture: ComponentFixture<FeuerwehrDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeuerwehrDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeuerwehrDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
