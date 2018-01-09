import { FeuerwehrModule } from './feuerwehr.module';

describe('FeuerwehrModule', () => {
    let feuerwehrModule: FeuerwehrModule;

    beforeEach(() => {
        feuerwehrModule = new FeuerwehrModule();
    });

    it('should create an instance', () => {
        expect(feuerwehrModule).toBeTruthy();
    });
});
