import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuerwehrComponent } from './feuerwehr.component';

describe('FeuerwehrComponent', () => {
    let component: FeuerwehrComponent;
    let fixture: ComponentFixture<FeuerwehrComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [FeuerwehrComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(FeuerwehrComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
