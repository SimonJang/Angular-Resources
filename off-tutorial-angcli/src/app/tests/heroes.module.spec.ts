import { HeroesModule } from '../heroes/heroes.module';

describe('Controleren van module', () => {
    it('Init success', () => {
        const app = new HeroesModule();
        expect(app instanceof HeroesModule).toBe(true);
    });
});
