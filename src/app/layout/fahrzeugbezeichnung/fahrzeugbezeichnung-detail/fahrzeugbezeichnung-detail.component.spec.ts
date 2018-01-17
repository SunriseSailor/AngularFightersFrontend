import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FahrzeugbezeichnungDetailComponent } from './fahrzeugbezeichnung-detail.component';

describe('FahrzeugbezeichnungDetailComponent', () => {
  let component: FahrzeugbezeichnungDetailComponent;
  let fixture: ComponentFixture<FahrzeugbezeichnungDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FahrzeugbezeichnungDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FahrzeugbezeichnungDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
