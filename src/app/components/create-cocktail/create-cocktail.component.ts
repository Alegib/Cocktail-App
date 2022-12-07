import { Component } from '@angular/core';

@Component({
  selector: 'app-create-cocktail',
  templateUrl: './create-cocktail.component.html',
  styleUrls: ['./create-cocktail.component.css']
})
export class CreateCocktailComponent {
  roles: string[];
 
  // registerForm: FormGroup;
  // nameInput: FormControl;
  // emailInput: FormControl;
  // ageInput: FormControl;
  // passwordInput: FormControl;
  // roleInput: FormControl;
 
  constructor() {
    this.roles = ['admin', 'user', 'operator'];
 
    // this.nameInput = new FormControl('', [
    //   Validators.required,
    //   CustomValidators.noPepito,
    // ]);
    // this.emailInput = new FormControl('', [
    //   Validators.required,
    //   Validators.email,
    // ]);
    // this.ageInput = new FormControl('', [
    //   Validators.required,
    //   CustomValidators.validAge(
    //     1,
    //     99
    //   ) /* Validators.min(1), Validators.max(99) */,
    // ]);
    // this.passwordInput = new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(6),
    // ]);
    // this.roleInput = new FormControl('', Validators.required);
 
    // this.registerForm = new FormGroup({
    //   name: this.nameInput,
    //   email: this.emailInput,
    //   age: this.ageInput,
    //   password: this.passwordInput,
    //   role: this.roleInput,
    // });
  }
 
  ngOnInit(): void {}
 
  onSubmit(): void {
    console.log('User created...');
  }
}
