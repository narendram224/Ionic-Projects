import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';
const Api_Url = environment.apiUrl;
const Api_Key = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
       currentArticle :any;
  constructor(private http :HttpClient) { }

  getData(url){
    return this.http.get(`${Api_Url}${url}&apiKey=${Api_Key}`)

  }
}
