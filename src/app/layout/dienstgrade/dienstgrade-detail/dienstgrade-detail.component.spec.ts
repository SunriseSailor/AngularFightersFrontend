import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DienstgradeDetailComponent } from './dienstgrade-detail.component';

describe('DienstgradeDetailComponent', () => {
  let component: DienstgradeDetailComponent;
  let fixture: ComponentFixture<DienstgradeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DienstgradeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DienstgradeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
