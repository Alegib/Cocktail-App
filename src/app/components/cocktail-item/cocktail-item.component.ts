import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Drink } from 'src/app/models/drink';
import { deleteDrink } from 'src/app/state/actions/delete-drink.action';
import { loadingDrink } from 'src/app/state/actions/drink-item.action';
import { editDrink } from 'src/app/state/actions/edit-drink.action';
import { AppState } from 'src/app/state/app.state';
import { selectDrink } from 'src/app/state/selectors/drink-item.selector';
import { selectEditDrinkSuccess } from 'src/app/state/selectors/edit-drink.selector';

@Component({
  selector: 'app-cocktail-item',
  templateUrl: './cocktail-item.component.html',
  styleUrls: ['./cocktail-item.component.css']
})
export class CocktailItemComponent {

  id: number;
  drink$: Observable<Drink>;
 
  // darkMode$: Observable<boolean>;

 
  constructor(private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,) 
   {
    this.id = 0;
    this.drink$ = new Observable<Drink>();
    // this.darkMode$ = new Observable<boolean>();

}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.drink$ = this.store.select(selectDrink);
    // this.darkMode$ = this.store.select(selectDarkMode);

    this.store.dispatch(loadingDrink({ id: this.id }));
    
  }

  deleteDrink(){
    this.store.dispatch(deleteDrink({id: this.id}))
    alert('Cocktail deleted!')
    this.router.navigate(['/']);
  }

  edit(id: number){
    this.router.navigate(['cocktails/edit', id])
  }

  
  

}
