import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor( private categoryService: CategoryService,
    private router: Router) { }

  catSub;

  categories: any[];

  tryToLeave = false;
  isOkToLeave = false;

  ngOnInit() {

    this.catSub = this.categoryService.getCategory().subscribe((r) => {
      console.log(r);
      this.categories = r;
    });
    
  }

  test() {
    this.isOkToLeave = true;
  }

  addCategory() {
    console.log("Add cat");
    this.router.navigate(['expenses']);
  }
}
