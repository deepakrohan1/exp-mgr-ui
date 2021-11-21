import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';
import { ExpenseComponent } from './expense/expense.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ExpensesService } from './services/expenses-service';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ItemComponent,
    ExpenseComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ExpensesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
