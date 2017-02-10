import {Component} from '@angular/core';
import {Hero} from './models/hero';
import {HeroService} from './services/hero.service';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router'


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  styleUrls: ['./styles/heroes.component.css'],
  templateUrl: './templates/heroes.component.html'
})

export class HeroComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private router: Router) { }
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero :Hero)  {
    this.selectedHero = hero;
  };

  title = 'Tour of Heroes';

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

}

