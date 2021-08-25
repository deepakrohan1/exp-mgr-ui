import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor( private categoryService: CategoryService) { }

  catSub;

  categories: any[];

  ngOnInit() {

    this.catSub = this.categoryService.getCategory().subscribe((r) => {
      console.log(r);
      this.categories = r;
    });
    
  }

  addCategory() {
    console.log("Add cat");
  }
}
