import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailItemComponent } from './cocktail-item.component';

describe('CocktailItemComponent', () => {
  let component: CocktailItemComponent;
  let fixture: ComponentFixture<CocktailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
