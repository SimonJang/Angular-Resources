import { ComponentFixture, TestBed, ComponentFixtureAutoDetect, async, fakeAsync, tick, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from '../shared/services/hero.service';
import { Hero } from '../shared/entities';
import { Router, RouterModule } from '@angular/router';
import { click } from './testing-helper/';

describe ('Controleren van dependency', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let comp: HeroesComponent;
    let de: DebugElement;
    let el: HTMLElement;
    let heroService: HeroService;
    let spy: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule.withRoutes([]) ],
            declarations: [ HeroesComponent ],
            providers: [ HeroService ]
        })
        .compileComponents().then(() => {
            fixture = TestBed.createComponent(HeroesComponent);
            comp = fixture.componentInstance;
        });  // compile template and css
    }));

    /**
     * Eerst moet een hero worden geselecteerd
     * Dan wordt de functie van de knop uitgevoerd
     * Dan controle van routing
    */

    it('should tell ROUTER to navigate when button clicked', fakeAsync(() => {
        fixture.detectChanges();
        tick();                  // enkel wanneer binnen fakeAsync, simuleert passeren van tijd
        fixture.detectChanges(); // update view
        de = fixture.debugElement.query(By.css('li'));
        de.triggerEventHandler('click', null);
        fixture.detectChanges();

        let component = fixture.componentInstance;
        let navigateSpy = spyOn((<any>component).router, 'navigate');
        comp.gotoDetail();

        expect(navigateSpy).toHaveBeenCalledWith(['/detail', 11]);

        }
    ));
});
