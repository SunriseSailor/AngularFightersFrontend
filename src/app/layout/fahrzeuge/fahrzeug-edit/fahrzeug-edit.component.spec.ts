import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrzeugEditComponent } from './fahrzeug-edit.component';

describe('FahrzeugEditComponent', () => {
  let component: FahrzeugEditComponent;
  let fixture: ComponentFixture<FahrzeugEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FahrzeugEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FahrzeugEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
