import { ComponentFixture, TestBed, ComponentFixtureAutoDetect, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from '../shared/services/hero.service';
import { Hero } from '../shared/entities';

describe ('Controleren van dependency', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let heroesComponent: HeroesComponent;
    let de: DebugElement;
    let el: HTMLElement;
    let heroService: HeroService;
    let spy: any;
    const HEROES: Hero[] = [
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

    // Async module samenvoegen, dit is noodzakelijk wanneer de externe stylesheets en HTML wordt gebruikt
    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [ RouterTestingModule ],
            declarations: [ HeroesComponent ],
            providers: [ HeroService ]
        })
        .compileComponents();  // compile template and css
    }));

    // Na het asynchroon opstellen van het component
    beforeEach(() => {
        fixture = TestBed.createComponent(HeroesComponent);
        heroService = fixture.debugElement.injector.get(HeroService);
        spy = spyOn(heroService, 'getHeroes')
            .and.returnValue(Promise.resolve(HEROES));

        de = fixture.debugElement.query(By.css('li'));
        el = de ? de.nativeElement : undefined;
    });

    it('should not show quote before OnInit', () => {
        expect(el).toBe(undefined);
        expect(spy.calls.any()).toBe(false, 'Geen data opgehaald');
    });

    it('should still not heroes after component initialized, since async', () => {
        fixture.detectChanges();
        expect(el).toBe(undefined);
        expect(spy.calls.any()).toBe(true, 'Data opgevraagd maar async');
    });

    it('should show heroes after async promise', async(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => { // wait for async getHeroes
            fixture.detectChanges();        // update view
            el = fixture.debugElement.query(By.css('li')).nativeElement;
            expect(el.textContent.trim()).toBe('12 Narco');
        });
    }));

    it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
        fixture.detectChanges();
        tick();                  // enkel wanneer binnen fakeAsync, simuleert passeren van tijd
        fixture.detectChanges(); // update view
        el = fixture.debugElement.query(By.css('li')).nativeElement;
        expect(el.textContent.trim()).toBe('12 Narco');
    }));

    it('should show quote after getQuote promise (done)', done => {
        fixture.detectChanges();
        // get the spy promise and wait for it to resolve
        spy.calls.mostRecent().returnValue.then(() => {
            fixture.detectChanges(); // update view with quote
            el = fixture.debugElement.query(By.css('li')).nativeElement;
            expect(el.textContent.trim()).toBe('12 Narco');
            done(); // Noodzakelijk wanneer er moet worden getest met intervalTimer en Observable (rxjs)
        });
    });

    it('should raise selected event when clicked', fakeAsync(() => {
        // let selectedHero = { id: 12, name: 'Narco' };
        fixture.detectChanges();
        tick();                  // enkel wanneer binnen fakeAsync, simuleert passeren van tijd
        fixture.detectChanges(); // update view
        de = fixture.debugElement.query(By.css('li'));
        de.triggerEventHandler('click', null); // click event
        fixture.detectChanges();

        el = fixture.debugElement.query(By.css('h3')).nativeElement; // werkt enkel bij DebugElement object
        expect(el.textContent.trim()).toBe('NARCO is my hero'); // controleren of click event wordt getoond
    }));
});
