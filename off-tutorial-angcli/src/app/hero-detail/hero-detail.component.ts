import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../shared/services/hero.service';
import { Hero } from '../shared/entities';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-hero-detail',
  styleUrls: [ 'hero-detail.css' ],
  templateUrl: 'hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {

    hero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) =>
        this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.router.navigate(['..'], {relativeTo: this.route});
    }
}
