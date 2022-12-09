import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchDarkMode } from 'src/app/state/actions/nav-bar.action';
import { AppState } from 'src/app/state/app.state';
// import { selectDarkMode } from 'src/app/state/selectors/nav-bar.selector';

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
