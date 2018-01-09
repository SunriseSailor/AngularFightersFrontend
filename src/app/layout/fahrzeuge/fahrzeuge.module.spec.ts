import { FahrzeugeModule } from './fahrzeuge.module';

describe('FahrzeugeModule', () => {
    let fahrzeugeModule: FahrzeugeModule;

    beforeEach(() => {
        fahrzeugeModule = new FahrzeugeModule();
    });

    it('should create an instance', () => {
        expect(fahrzeugeModule).toBeTruthy();
    });
});
