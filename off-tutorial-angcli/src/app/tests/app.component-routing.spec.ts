import { ComponentFixture, TestBed, ComponentFixtureAutoDetect, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from '../app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkStubDirective } from './testing-helper';

describe ('Controleren van dependency', () => {
    let fixture: ComponentFixture<AppComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let comp: AppComponent;


    beforeEach( async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        })
        .compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(AppComponent);
            comp = fixture.componentInstance;
        });

    beforeEach(() => {
        // trigger initial data binding
        fixture.detectChanges();

        // find DebugElements with an attached RouterLinkStubDirective
        linkDes = fixture.debugElement
            .queryAll(By.directive(RouterLinkStubDirective));

        // get the attached link directive instances using the DebugElement injectors
        links = linkDes
            .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
});

}));
});
