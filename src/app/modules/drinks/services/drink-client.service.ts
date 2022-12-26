import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AjaxCallArg } from '../interfaces/drink-client';

@Injectable({
  providedIn: 'root'
})
export class DrinkClientService {

  constructor(
    private httpClient:HttpClient
  ) { }

  ajaxCall<T = unknown>({ headers = new HttpHeaders(), method = 'get', url, reqBody = null, param }: AjaxCallArg): Observable<T> {
    return this.httpClient.request<T>(method, url, {
      headers: headers,
      body: reqBody,
      params: param,
    });
  }

  getAllDrinks(){
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    return this.ajaxCall({
      url:url
    })

  }

  getDrink(searchSrt:string){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchSrt}`
    return this.ajaxCall({
      url:url
    })
  }

}
