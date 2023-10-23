import { Component, OnInit,ElementRef, AfterViewInit } from '@angular/core';
import { Category } from '../../_models/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $: any; 
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  //Asigna el valor para nuevos id del category, empieza en 3 ya que se agregaron en getCategories 3 elementos y el que sigue es 4
  n: number =2;

  // Crea el arreglo de objetos Category y lo declara vacio
  categories: Category[] = [];
  categoriaActual : Category | undefined;
  // Crea los campos para agregar en el form
  categoryForm: FormGroup = this.formBuilder.group({
    category: ['', Validators.required],
    code: ['', Validators.required]
  });
  constructor(private formBuilder: FormBuilder) {}
  
  /**
   * Instrucciones
   *El codigo crea los objetos tabla en getCategories que despues son llamados en el ngOnInit
   * En el html se muestra un id mayor al que en realidad es
   */
 

  //Corre al iniciar , (da la tabla)
  ngOnInit(): void {
    this.getCategories();
    this.n=this.categories.length-1;
  }

  // Crea objetos Category
  getCategories() {
    this.categories.push(new Category(0, '76', 'Categoria 1', '1'));
    this.categories.push(new Category(1, '39', 'Categoria 2', '0'));
    this.categories.push(new Category(2, '25', 'Categoria 3', '1'));
     
  }


  // La funcion que abre el modal
  openModal() {
    $('#myModal').modal('show');
  }

  // La funcion que cierra el modal
  closeModal() {
    $('#myModal').modal('hide');
  }


  // Funcion al hacer submit en el form
  onSubmit() {
    if (this.categoryForm.valid) {
      const categoryData = this.categoryForm.get('category')?.value;
      const codeData = this.categoryForm.get('code')?.value;
      this.n++;
      this.categories.push(new Category(this.n, codeData, categoryData, '1'));
      this.categoryForm.reset();
    }
  }
 
  openModal2(category: Category): void {
    $('#myModal2').modal('show');

    this.categoriaActual= category;
  }
  desactivarActual(){
    console.log(this.categories);
    
    if(this.categoriaActual){
    this.categories[this.categoriaActual.category_id].status = '0';  
  }
}
  // this.crd.detectChanges()
  activarActual(){
    if(this.categoriaActual){
      this.categories[this.categoriaActual.category_id].status= "1";        
    }
  }
  editarActual(){
  $('#myModal2').modal('hide');
  $('#myModal3').modal('show');
 }
 onSubmitEdit() {
  if (this.categoryForm.valid) {
    const categoryData = this.categoryForm.get('category')?.value;
    const codeData = this.categoryForm.get('code')?.value;
    if(this.categoriaActual){
      this.categories[this.categoriaActual.category_id].category= categoryData;        
      this.categories[this.categoriaActual.category_id].code=codeData;        
      }
    this.categoryForm.reset();
    }
  }
}

