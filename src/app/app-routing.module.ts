import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ExpenseComponent } from './expense/expense.component';
import { CategoryGuard } from './guards/category.guard';


const routes: Routes = [
  // {path: 'expenses', component: ExpenseComponent},
  // {path: '', component: CategoryComponent, canDeactivate: [CategoryGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
