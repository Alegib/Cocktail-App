import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Drink } from '../models/drink';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  readonly JSON_DB = 'http://localhost:8000/drinks/'

  constructor(private http:HttpClient) { }

  getAllDrinks(): Observable<Drink[]>{
    return this.http.get<Drink[]>(this.JSON_DB).pipe(delay(1000));
  }

  getDrinkById(id: number): Observable<Drink>{
    return this.http.get<Drink>(`${this.JSON_DB}${id}`)
  }

  createDrink(cocktail: Drink): Observable<Drink>{
    return this.http.post<Drink>(this.JSON_DB, cocktail)
 }

  deleteDrinkById(id: number): Observable<Drink> {
    return this.http.delete<Drink>(`${this.JSON_DB}${id}`)
  }

  editDrink(id: number, drink:Drink):Observable<Drink>{
    return this.http.put<Drink>(`${this.JSON_DB}${id}`, drink)
  }
  
}
