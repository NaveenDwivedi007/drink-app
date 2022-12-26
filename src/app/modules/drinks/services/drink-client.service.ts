import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AjaxCallArg, Drink, DrinkApiRes } from '../interfaces/drink-client';
import { DrinkUi } from '../interfaces/drink-ui';

@Injectable({
  providedIn: 'root'
})
export class DrinkClientService {

  constructor(
    private httpClient:HttpClient
  ) { }

  private ajaxCall<T = unknown>({ headers = new HttpHeaders(), method = 'get', url, reqBody = null, param }: AjaxCallArg): Observable<T> {
    return this.httpClient.request<T>(method, url, {
      headers: headers,
      body: reqBody,
      params: param,
    });
  }

  getAllDrinks(){
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    return this.ajaxCall<DrinkApiRes>({
      url:url
    }).pipe(
      map(apiRes=>{
        return apiRes.drinks.map(this.drinkDTO)
      })
    )

  }

  getDrink(searchSrt:string){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchSrt}`
    return this.ajaxCall<DrinkApiRes>({
      url:url
    }).pipe(
      map(apiRes=>{
        return apiRes.drinks.map(this.drinkDTO)
      })
    )
  }

  drinkDTO(drink:Drink):DrinkUi{
    let ingredientRegex = /Ingredient/;
    let measureRegex = /Measure/
    let measureArr = []
    let ingredientArr = []

    for (const key in drink) {
      if (Object.prototype.hasOwnProperty.call(drink, key)) {
        if (ingredientRegex.test(key)) {
          ingredientArr.push(drink[key])
        }else if (measureRegex.test(key)) {
          measureArr.push(drink[key])
        }  
      }
    }
    measureArr=measureArr.filter(Boolean)
    ingredientArr=ingredientArr.filter(Boolean)
    return {
      id:drink.idDrink,
      drinkName:drink.strDrink,
      drinkImp:drink.strDrinkThumb,
      drinkImageSource:drink.strImageSource,
      drinkImageAttribution:drink.strImageAttribution,
      ingredient:ingredientArr,
      measure:measureArr,
      instructions:drink.strInstructions
    }
  }

}
