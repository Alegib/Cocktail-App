import { Component, EventEmitter, Input, Output, NgModule } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cocktail } from 'src/app/models/cocktail';
import { Drink } from 'src/app/models/drink';
import { loadingDrinks } from 'src/app/state/actions/drink.actions';
import { AppState } from 'src/app/state/app.state';
import { selectDrinks, selectLoading } from 'src/app/state/selectors/drinks.selector';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-scroll-list',
  templateUrl: './scroll-list.component.html',
  styleUrls: ['./scroll-list.component.css']
})
export class ScrollListComponent {
  loading$: Observable<boolean>;
  drinks$: Observable<Drink[]>;

  cocktail: Drink | undefined;

  @Output()
  getCocktail = new EventEmitter<Drink>
  

  constructor(private store: Store<AppState>){
    this.loading$ = new Observable<boolean>();
    this.drinks$ = new Observable<Drink[]>();
    
  }

  ngOnInit(): void {
    
    this.loading$ = this.store.select(selectLoading);
    this.drinks$ = this.store.select(selectDrinks);
    this.store.dispatch(loadingDrinks());
    
    
  }

  cocktailInfo(){
    this.getCocktail.emit(this.cocktail)
  }

}
