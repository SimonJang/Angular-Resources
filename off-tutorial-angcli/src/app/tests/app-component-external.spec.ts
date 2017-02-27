import { ComponentFixture, TestBed, ComponentFixtureAutoDetect, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from '../app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe ( 'AppComponent (external template)', () => {
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // async beforeEach
    beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ RouterTestingModule ],
        declarations: [ AppComponent ], // declare the test component
    })
    .compileComponents();  // compile template and css
    }));

    beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance;

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    });

    it('should display original title', () => {
        fixture.detectChanges();
        // Vergelijkt de title van het component met de waarde van de html
        expect(el.textContent).toContain(comp.title);
        });

    it('should display a different test title', () => {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
        });
    });
