import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServices } from '../../services/heroes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  heroes: any = [];
  termino: string;
  constructor(private activadeRout: ActivatedRoute, private _heroesServices: HeroesServices,
    private router: Router) {


  }

  ngOnInit() {
    this.activadeRout.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesServices.buscarHeroes(params['termino']);
    })
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx])
  }

}
