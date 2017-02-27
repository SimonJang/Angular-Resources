import { DebugElement } from '@angular/core';
import { Injectable, Input, Directive } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Hero } from '../../shared/entities';

export { HeroDetailServiceSpy } from './hero-service-spy';

/** Button events to pass to `DebugElement.triggerEventHandler` for RouterLink event handler */
export const ButtonClickEvents = {
   left:  { button: 0 },
   right: { button: 2 }
};

/** Simulate element click. Defaults to mouse left-button click event. */
export function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}

export class RouterStub {
  navigateByUrl(url: string) { return url; }
}

export class FakeHeroService {

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
}

@Injectable()
export class ActivatedRouteStub {

  // ActivatedRoute.params is Observable
  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  // Test parameters
  private _testParams: {};
  get testParams() { return this._testParams; }
  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }

  // ActivatedRoute.snapshot.params
  get snapshot() {
    return { params: this.testParams };
  }
}

@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
    }
  })

export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}
