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
}
