import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
// import { of } from 'rxjs-compat/operator/o'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 routeChangeEvent = new Subject<boolean>();

  constructor(private httpClient: HttpClient) { }
  isServicerBilling = false;

  setBool (page: boolean) {
    this.isServicerBilling = true;
  }

  getBool() {
    return this.isServicerBilling;
  }

   getCategory(): Observable<any[]> {
    // return this.httpClient.get<any[]>('http://localhost:8090/categories/');
    return of(["string"]);
  }



}
