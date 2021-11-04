import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryComponent } from '../category/category.component';
import { CategoryService } from '../category/category.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryGuard implements CanDeactivate<CategoryComponent> {
  constructor(private catSer: CategoryService) {

  }
  canDeactivate(component: CategoryComponent, 
    currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      component.tryToLeave = true;
      if (component.isOkToLeave) {
        component.tryToLeave = true;
        return true;
      } else {
        component.tryToLeave = false;
        return false;
      }
      
      return ;
  }
 
  
}
