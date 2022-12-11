import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/state/app.state';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  

  constructor(
    private store: Store<AppState>,
  ) {

  }

  ngOnInit(): void {

  }

}
