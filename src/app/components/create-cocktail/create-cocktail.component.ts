import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { min, Observable } from 'rxjs';
import { Drink } from 'src/app/models/drink';
import { createDrink, initCreateDrink } from 'src/app/state/actions/create-drink.action';
import { loadingDrinks } from 'src/app/state/actions/drink.actions';
import { AppState } from 'src/app/state/app.state';
import { selectCreateDrinkSuccess } from 'src/app/state/selectors/create-drink.selector';
import { selectDrinks } from 'src/app/state/selectors/drinks.selector';

@Component({
  selector: 'app-create-cocktail',
  templateUrl: './create-cocktail.component.html',
  styleUrls: ['./create-cocktail.component.css']
})
export class CreateCocktailComponent {
  // darkMode$: Observable<boolean>;
  createDrinkSuccess$: Observable<boolean>;
 
  categories: string[] = [];
  id: number;
 
  createForm: FormGroup;
  nameInput: FormControl;
  categoryInput: FormControl;
  ingredientInput: FormControl;
  measureInput: FormControl;
  instructionsInput: FormControl;
  imageInput: FormControl;
  alcoholicInput: FormControl;
  editable = new FormControl('true');
 
 
  constructor(private store: Store<AppState>,
    private router: Router,) {
    this.createDrinkSuccess$ = new Observable();
 
    this.nameInput = new FormControl('', [
      Validators.required
    ]);
    this.categoryInput = new FormControl('', [
      Validators.required
    ]);
    this.ingredientInput = new FormControl('', [
      Validators.required, Validators.max(40)
      
    ]);
    this.measureInput = new FormControl('', [
      Validators.required, Validators.max(40)
    
    ]);
    this.imageInput = new FormControl('', [
      Validators.required,
    
    ]);
    this.alcoholicInput = new FormControl();
    this.instructionsInput = new FormControl('', [Validators.required, Validators.min(5), Validators.max(200)]);
    
    this.createForm = new FormGroup({
      name: this.nameInput,
      category: this.categoryInput,
      alcoholic: this.alcoholicInput,
      ingredients: this.ingredientInput,
      measures: this.measureInput,
      instructions: this.instructionsInput,
      image: this.imageInput,
      editable: this.editable
    });

    this.id = 0;
  }
 
  ngOnInit(): void {
    this.store.dispatch(loadingDrinks());
    this.store.select(selectDrinks).subscribe(response=>{ for(let obj of response){
    if(obj.id > this.id){
        this.id = obj.id;
    }
    if(this.categories.includes(obj.category)){
      console.log(obj.category)
      continue;
    }
    else{this.categories.push(obj.category)}
   }})

    this.createDrinkSuccess$ = this.store.select(selectCreateDrinkSuccess);

    this.store.dispatch(initCreateDrink());
  }
 
  createCocktail(): void {
    // Create drink
    this.createForm.value.ingredients = this.createForm.value.ingredients.trim().split('\n')
    this.createForm.value.measures = this.createForm.value.measures.trim().split('\n')
    this.store.dispatch(createDrink({ drink: this.createForm.value}));

    // Check if drink was created
    this.createDrinkSuccess$.subscribe(success => {
      if (success) {
        alert('Cocktail created successfully!');
        // Navigate to home
        this.router.navigate(['cocktails/', this.id+1]);
      } else {
        console.log('fail');
      }
    });

  }


}
