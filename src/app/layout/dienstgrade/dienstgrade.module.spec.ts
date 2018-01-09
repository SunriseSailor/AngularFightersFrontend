import { DienstgradeModule } from './dienstgrade.module';

describe('DienstgradeModule', () => {
    let dienstgradeModule: DienstgradeModule;

    beforeEach(() => {
        dienstgradeModule = new DienstgradeModule();
    });

    it('should create an instance', () => {
        expect(dienstgradeModule).toBeTruthy();
    });
});
