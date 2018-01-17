import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MitarbeiterEditComponent } from './mitarbeiter-edit.component';

describe('MitarbeiterEditComponent', () => {
  let component: MitarbeiterEditComponent;
  let fixture: ComponentFixture<MitarbeiterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitarbeiterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitarbeiterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
