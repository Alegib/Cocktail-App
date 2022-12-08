import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Drink } from 'src/app/models/drink';
import { loadingDrink } from 'src/app/state/actions/drink-item.action';
import { loadingDrinks } from 'src/app/state/actions/drink.actions';
import { editDrink } from 'src/app/state/actions/edit-drink.action';
import { AppState } from 'src/app/state/app.state';
import { selectDrink } from 'src/app/state/selectors/drink-item.selector';
import { selectDrinks } from 'src/app/state/selectors/drinks.selector';
import { selectEditDrinkSuccess } from 'src/app/state/selectors/edit-drink.selector';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  id: number;
  drink$: Observable<Drink>;
 
  // darkMode$: Observable<boolean>;
  categories: string[] = ["Ordinary Drink", "Cocktail", "Shot"];


  editDrinkSuccess$: Observable<boolean>;
  editForm: FormGroup;
  nameInput: FormControl;
  categoryInput: FormControl;
  ingredientInput: FormControl;
  measureInput: FormControl;
  instructionsInput: FormControl;
  imageInput: FormControl;
  alcoholicInput: FormControl;
  
  
 
  constructor(private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,) 
   {
    this.id = 0;
    this.drink$ = new Observable<Drink>();
    // this.darkMode$ = new Observable<boolean>();
    this.editDrinkSuccess$ = new Observable();
 
    this.nameInput = new FormControl();
    this.categoryInput = new FormControl();
    this.ingredientInput = new FormControl();
    this.measureInput = new FormControl();
    this.imageInput = new FormControl();
    this.alcoholicInput = new FormControl();
    this.instructionsInput = new FormControl();
  
  this.editForm = new FormGroup({
    name: this.nameInput,
    category: this.categoryInput,
    alcoholic: this.alcoholicInput,
    ingredients: this.ingredientInput,
    measures: this.measureInput,
    instructions: this.instructionsInput,
    image: this.imageInput
  });
}


  ngOnInit(): void {
    this.store.dispatch(loadingDrinks());
    this.store.select(selectDrinks).subscribe(response=>{ for(let obj of response){
    if(this.categories.includes(obj.category)){
      console.log(obj.category)
      continue;
    }
    else{this.categories.push(obj.category)}
   }})
   
    this.id = this.route.snapshot.params['id'];
    this.store.dispatch(loadingDrink({id: this.id}))
    this.store.select(selectDrink).subscribe((drink) => {
      if(drink){
        this.editForm.patchValue({
          name: drink.name,
          category: drink.category,
          alcoholic:drink.alcoholic,
          ingredients: drink.ingredients.join("\n"),
          measures: drink.measures.join("\n"),
          instructions: drink.instructions,
          image: drink.image,
          editable: true
        })
      }
    })
    // this.darkMode$ = this.store.select(selectDarkMode);
    this.editDrinkSuccess$ = this.store.select(selectEditDrinkSuccess);
    this.store.dispatch(loadingDrink({ id: this.id }));


    
  }


  editDrink(){
    this.editForm.value.ingredients = this.editForm.value.ingredients.trim().split('\n')
    this.editForm.value.measures = this.editForm.value.measures.trim().split('\n')
    this.store.dispatch(editDrink({ id: this.id, drink: this.editForm.value}));
    
    // Check if drink was created
    this.editDrinkSuccess$.subscribe(success => {
      if (success) {
        alert('Cocktail edited successfully!');
        // Navigate to home
        this.router.navigate([`cocktails/${this.id}`]);
      } else {
        console.log('fail');
      }
    });

  }
  

}


  
