import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrzeugbezeichnungComponent } from './fahrzeugbezeichnung.component';

describe('FahrzeugbezeichnungComponent', () => {
    let component: FahrzeugbezeichnungComponent;
    let fixture: ComponentFixture<FahrzeugbezeichnungComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [FahrzeugbezeichnungComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(FahrzeugbezeichnungComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
