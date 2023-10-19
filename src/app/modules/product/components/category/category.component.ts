import { Component, OnInit } from '@angular/core';
import { Category } from '../../_models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  categories: Category[] = [];


  ngOnInit(): void {
    this.getCategories();
  }
  //crea un método llamado getCategories donde le agregues 3 objetos category (con datos dummy) al arreglo categories,
  getCategories() {
    // Agrega 3 objetos de tipo Category con datos dummy al arreglo categories
    this.categories.push(new Category(1, '7685', 'Categoria 1', 'En existencia'));
    this.categories.push(new Category(2, '7639', 'Category 2', 'No hay'));
    this.categories.push(new Category(3, '7683', 'Category 3', 'En existencia'));
  }
}
