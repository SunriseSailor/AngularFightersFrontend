import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MitarbeiterDetailComponent } from './mitarbeiter-detail.component';

describe('MitarbeiterDetailComponent', () => {
  let component: MitarbeiterDetailComponent;
  let fixture: ComponentFixture<MitarbeiterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitarbeiterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitarbeiterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
