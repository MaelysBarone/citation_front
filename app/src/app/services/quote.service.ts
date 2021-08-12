import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Quote } from '../models/quote';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  baseURL: string = environment.apiURL + "/quotes";
  constructor(private http: HttpClient) { }

  randomQuote(quote: Quote): Observable<any> {
    console.log(quote)
    return this.http.post<any>(this.baseURL + "/quotes", quote);
  }
}
