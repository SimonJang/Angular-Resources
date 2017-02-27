import { ComponentFixture, TestBed, ComponentFixtureAutoDetect, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from '../shared/services/hero.service';
import { Hero } from '../shared/entities';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../shared/services/mock-heroes';
import { Page, click } from './testing-helper/';
import { Router, RouterModule } from '@angular/router';

describe ('Controleren van dependency', () => {
    let fixture: ComponentFixture<HeroDetailComponent>;
    let heroesComponent: HeroDetailComponent;
    let comp: HeroDetailComponent;
    let heroService: HeroService;
    let de: DebugElement;
    let el: HTMLElement;
    let spy: any;
    let expectedHero: Hero;
    let page: Page;

    // Compileren van de verschillende onderdelen
    beforeEach( async(() => {
    TestBed.configureTestingModule({
        imports: [FormsModule, RouterTestingModule],
        declarations: [ HeroDetailComponent ],
        providers: [ HeroService ]
    })
    .compileComponents(); // compile template and css
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroDetailComponent);
        comp    = fixture.componentInstance;
        fixture.detectChanges();

        // pretend that it was wired to something that supplied a hero
        expectedHero = {id:42, name:'Test Name'};
        comp.hero = expectedHero;
        fixture.detectChanges(); // trigger initial data binding
    });

    // Controleert of de Hero Input() op scherm wordt getoond
    it('should display hero name', () => {
        el = fixture.debugElement.query(By.css('h2')).nativeElement;
        expect(el.textContent.trim()).toBe('Test Name details!');
    });
});

