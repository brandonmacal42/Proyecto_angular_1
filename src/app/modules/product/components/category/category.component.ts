import { Component, OnInit } from '@angular/core';
import { Category } from '../../_models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./style.css']
})
export class CategoryComponent implements OnInit{

  categories: Category[] = [];


  ngOnInit(): void {
    this.getCategories();
  }
  //crea un método llamado getCategories donde le agregues 3 objetos category (con datos dummy) al arreglo categories,
  getCategories() {
    // Agrega 3 objetos de tipo Category con datos dummy al arreglo categories
    this.categories.push(new Category(1, 'v1', 'Categoria 1', 'Si'));
    this.categories.push(new Category(2, 'v2', 'Category 2', 'No'));
    this.categories.push(new Category(3, 'v3', 'Category 3', 'Si'));
  }
}
