import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

   getCategory(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:8090/categories/');
  }

}
