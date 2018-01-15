import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuerwehrEditComponent } from './feuerwehr-edit.component';

describe('FeuerwehrEditComponent', () => {
  let component: FeuerwehrEditComponent;
  let fixture: ComponentFixture<FeuerwehrEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeuerwehrEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeuerwehrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
