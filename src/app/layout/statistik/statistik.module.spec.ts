import { StatistikModule } from './statistik.module';

describe('StatistikModule', () => {
    let statistikModule: StatistikModule;

    beforeEach(() => {
        statistikModule = new StatistikModule();
    });

    it('should create an instance', () => {
        expect(statistikModule).toBeTruthy();
    });
});
