 import { Hero } from '../../shared/entities/hero';

 export class HeroDetailServiceSpy{
  testHero = {id: 42, name: 'Test Hero'};

  heroes: Hero[] = [
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];

  getHero = jasmine.createSpy('getHero').and.callFake(
    () => Promise
      .resolve(true)
      .then(() => Object.assign({}, this.testHero))
  );

  getHeroes = jasmine.createSpy('getHeroes').and.callFake(
    (heroes: Hero[]) => Promise
      .resolve(true)
      .then(() => Object.assign(this.heroes, heroes))
  );

  /*

  Bestaat niet in huidige service

  saveHero = jasmine.createSpy('saveHero').and.callFake(
    (hero: Hero) => Promise
      .resolve(true)
      .then(() => Object.assign(this.testHero, hero))
  );
  */
}
