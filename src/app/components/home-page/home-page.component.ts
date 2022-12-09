import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { delay, Observable } from 'rxjs';
import { Drink } from 'src/app/models/drink';
import { loadingDrink } from 'src/app/state/actions/drink-item.action';
import { loadingDrinks } from 'src/app/state/actions/drink.actions';
import { AppState } from 'src/app/state/app.state';
import { selectDrink } from 'src/app/state/selectors/drink-item.selector';
import { selectDrinks, selectLoading } from 'src/app/state/selectors/drinks.selector';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  id: number;
  drink$: Observable<Drink>;
  darkMode$: Observable<boolean>;
  

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.id = this.id = Math.floor(Math.random() * 300) + 1;
    this.drink$ = new Observable<Drink>();
    this.darkMode$ = new Observable<boolean>();
  }

  ngOnInit(): void {
    
    this.store.dispatch(loadingDrinks());
    
    this.drink$ = this.store.select(selectDrink);
    this.store.select(selectLoading);
    this.store.select(selectDrinks);
    // this.store.select(selectDrinks).subscribe(response=> this.id = Math.floor(Math.random() * response.length) + 1)
    this.store.dispatch(loadingDrink({ id: this.id }));
    console.log(this.id)
    
    
  }

  

}
