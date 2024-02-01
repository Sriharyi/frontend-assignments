import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.quotable.io/random'; 

  constructor(private http: HttpClient) {}

  fetchQuote(): Promise<any> {
     const quote = this.http.get(this.apiUrl);
     return firstValueFrom(quote).then(response => response || '') // Handle undefined response
      .catch(error => {
        console.error('An error occurred while fetching the quote:', error);
        throw error;
      });
  }
}
