import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DienstgradeEditComponent } from './dienstgrade-edit.component';

describe('DienstgradeEditComponent', () => {
  let component: DienstgradeEditComponent;
  let fixture: ComponentFixture<DienstgradeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DienstgradeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DienstgradeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
