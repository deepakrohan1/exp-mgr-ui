import { Injectable } from "@angular/core";
import { of } from "rxjs";



@Injectable()
export class ExpensesService {

    constructor() {}
    
    getExpensesByCategoryCode () {

        return of([23, 13, 21, 14, 37, 15, 18, 34, 30]);
    }
}