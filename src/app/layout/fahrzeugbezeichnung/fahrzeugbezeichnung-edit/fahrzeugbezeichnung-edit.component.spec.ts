import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FahrzeugbezeichnungEditComponent } from './fahrzeugbezeichnung-edit.component';

describe('FahrzeugbezeichnungEditComponent', () => {
  let component: FahrzeugbezeichnungEditComponent;
  let fixture: ComponentFixture<FahrzeugbezeichnungEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FahrzeugbezeichnungEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FahrzeugbezeichnungEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
