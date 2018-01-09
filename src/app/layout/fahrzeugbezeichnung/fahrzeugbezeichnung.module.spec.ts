import { FahrzeugbezeichnungModule } from './fahrzeugbezeichnung.module';

describe('FahrzeugbezeichnungModule', () => {
    let fahrzeugbezeichnungModule: FahrzeugbezeichnungModule;

    beforeEach(() => {
        fahrzeugbezeichnungModule = new FahrzeugbezeichnungModule();
    });

    it('should create an instance', () => {
        expect(fahrzeugbezeichnungModule).toBeTruthy();
    });
});
