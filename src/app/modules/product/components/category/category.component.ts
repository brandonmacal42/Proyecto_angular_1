import { Component, OnInit } from '@angular/core';
import { Category } from '../../_models/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $: any; 
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  //Asigna el valor para nuevos id del category, empieza en 3 ya que se agregaron en getCategories 3 elementos y el que sigue es 4
  n: number = 3;

  // Crea el arreglo de objetos Category y lo declara vacio
  categories: Category[] = [];

  // Crea los campos para agregar en el form
  categoryForm: FormGroup = this.formBuilder.group({
    category: ['', Validators.required],
    code: ['', Validators.required]
  });
  
  //Constructor del form
  constructor(private formBuilder: FormBuilder) {}

  //Corre al iniciar , (da la tabla)
  ngOnInit(): void {
    this.getCategories();
    
  }

  // Crea objetos Category
  getCategories() {
    this.categories.push(new Category(1, '7685', 'Categoria 1', 'En existencia'));
    this.categories.push(new Category(2, '7639', 'Category 2', 'No hay'));
    this.categories.push(new Category(3, '7683', 'Category 3', 'En existencia'));
  }

  // La funcion que abre el modal
  openModal() {
    $('#myModal').modal('show');
  }

  // La funcion que cierra el modal
  closeModal() {
    $('#myModal').modal('hide');
  }

  // Otra funcion que abre el mdoal desde openModal()
  openModalOnClick() {
    this.openModal();
  }
  
  // Funcion al hacer submit en el form
  onSubmit() {
    if (this.categoryForm.valid) {
      const categoryData = this.categoryForm.get('category')?.value;
      const codeData = this.categoryForm.get('code')?.value;
      this.n++;
      this.categories.push(new Category(this.n, codeData, categoryData, 'En existencia'));
      this.categoryForm.reset();
    }
  }
}
