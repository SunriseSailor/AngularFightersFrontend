import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DienstgradeComponent } from './dienstgrade.component';

describe('DienstgradeComponent', () => {
    let component: DienstgradeComponent;
    let fixture: ComponentFixture<DienstgradeComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [DienstgradeComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DienstgradeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
