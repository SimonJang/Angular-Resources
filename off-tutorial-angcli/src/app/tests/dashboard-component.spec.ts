import { ComponentFixture, TestBed, ComponentFixtureAutoDetect, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from '../shared/services/hero.service';
import { Router } from '@angular/router';
import { FakeHeroService } from './testing-helper';
import { RouterStub } from './testing-helper';

describe ('Controleren van dependency', () => {
    let fixture: ComponentFixture<DashboardComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let comp: DashboardComponent;
    let heroService: FakeHeroService;

    beforeEach( async(() => {
      TestBed.configureTestingModule({
        declarations: [ DashboardComponent ],
        providers: [HeroService],
        imports: [ RouterTestingModule ],
      })
      .overrideComponent(DashboardComponent, {
        set: {
          providers: [
            { provide: HeroService, useClass: FakeHeroService }
          ]
          }
        })
        .compileComponents().then(() => {
          fixture = TestBed.createComponent(DashboardComponent);
          comp = fixture.componentInstance;
          heroService = fixture.debugElement.injector.get(HeroService);
        });
    }));

  it('Controleert of de juiste aantal heroes zjn opgeroepen, van fakeService', fakeAsync(() => {
        fixture.detectChanges();
        tick();                  // enkel wanneer binnen fakeAsync, simuleert passeren van tijd
        fixture.detectChanges(); // update view;
        expect(comp.heroes.length).toBe(4);
        }
    ));

});


