import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroe } from '../../services/heroes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(private _heroesService: HeroesServices, private router: Router) {

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);

  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx])
    console.log(idx);
  }
}
