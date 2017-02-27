import { ComponentFixture, TestBed, ComponentFixtureAutoDetect, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from '../shared/services/hero.service';
import { Hero } from '../shared/entities';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../shared/services/mock-heroes';
import { Router, RouterModule } from '@angular/router';

import { click } from './testing-helper';

describe ('Controleren van dependency op basis van page', () => {
    let fixture: ComponentFixture<HeroDetailComponent>;
    let comp: HeroDetailComponent;
    let page: Page;
    let expectedHero: Hero;

    class Page {
        gotoSpy: jasmine.Spy;
        navSpy: jasmine.Spy;
        backBtn: DebugElement;
        nameDisplay: HTMLElement;
        nameInput: HTMLInputElement;
        comp: HeroDetailComponent;
        fixture: ComponentFixture<HeroDetailComponent>;

        constructor() {
            const router = TestBed.get(Router); // get router from root injector
            this.navSpy  = spyOn(router, 'navigate');
        }

        /** Add page elements after hero arrives */
        addPageElements() {
            if (comp.hero) {
                // have a hero so these elements are now in the DOM
                this.backBtn  = fixture.debugElement.query(By.css('button'));
                this.nameDisplay = fixture.debugElement.query(By.css('span')).nativeElement;
                this.nameInput = fixture.debugElement.query(By.css('input')).nativeElement;
            }
        }
    }

    function createComponent() {
        fixture = TestBed.createComponent(HeroDetailComponent);
        comp = fixture.componentInstance;
        page = new Page();

        // 1st change detection triggers ngOnInit which gets a hero
        fixture.detectChanges();
        return fixture.whenStable().then(() => {
            // 2nd change detection displays the async-fetched hero
            fixture.detectChanges();
            page.addPageElements();
        });
    }

    beforeEach( async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, RouterTestingModule],
            declarations: [ HeroDetailComponent ],
            providers: [ HeroService ]
        })
        .compileComponents(); // compile template and css
    }));

    beforeEach(async(() => {
        expectedHero = {id: 42, name: 'Test Name'};
        createComponent();
    }));

    it('should display that hero\'s name', () => {
        comp.hero = expectedHero;
        fixture.detectChanges();
        page.addPageElements();
        expect(page.nameDisplay.textContent).toBe(expectedHero.name);
    });

    it('should navigate when click cancel', () => {
        comp.hero = expectedHero;
        fixture.detectChanges();
        page.addPageElements();
        click(page.backBtn);
        expect(page.navSpy.calls.any()).toBe(true, 'router.navigate called');
    });
});
