import { MitarbeiterModule } from './mitarbeiter.module';

describe('MitarbeiterModule', () => {
    let mitarbeiterModule: MitarbeiterModule;

    beforeEach(() => {
        mitarbeiterModule = new MitarbeiterModule();
    });

    it('should create an instance', () => {
        expect(mitarbeiterModule).toBeTruthy();
    });
});
