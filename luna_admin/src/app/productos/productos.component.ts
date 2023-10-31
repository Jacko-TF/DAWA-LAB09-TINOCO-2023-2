import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  productsForm = new FormGroup(
    {
      codigo: new FormControl(null, Validators.required),
      descripcion: new FormControl(null, Validators.required),
      precio: new FormControl(null, Validators.required),
    }
  );

  productsFormEdit = new FormGroup(
    {
      codigo: new FormControl(0, Validators.required),
      descripcion: new FormControl('', Validators.required),
      precio: new FormControl(0, Validators.required),
    }
  );

  product ={ codigo:0, descripcion:'', precio:0 };

  productos = [
    { codigo:1, descripcion:'Producto 1', precio:20 },
  ];

  constructor() {}

  ngOnInit(): void {
      console.log('Producto cargado');
  };

  añadir(v:any){
    this.productos.push(v);
  };

  editar(codigo: any, v: any) {
    const index = this.productos.findIndex(producto => producto.codigo === codigo);
    this.productos[index] = v;
  };
  
  eliminar(codigo: number) {
    const index = this.productos.findIndex(producto => producto.codigo === codigo);
    this.productos.splice(index, 1);
  };

  data(codigo: number) {
    const index = this.productos.findIndex(producto => producto.codigo === codigo);
    this.product = this.productos[index];
    this.productsFormEdit.controls['codigo'].setValue(this.product.codigo);
    this.productsFormEdit.controls['descripcion'].setValue(this.product.descripcion);
    this.productsFormEdit.controls['precio'].setValue(this.product.precio);
  };
  
  onSubmit() {
    if (this.productsForm.valid) {
      this.añadir(
        {
          codigo:this.productsForm.controls['codigo'].value ,
          descripcion:this.productsForm.controls['descripcion'].value, 
          precio:this.productsForm.controls['precio'].value
        });
      }else{
        alert("No se pudo agregar el producto, complete todos los campos");
      }
  };

  onSubmitEdit() {
    const cod = this.productsFormEdit.controls['codigo'].value
    this.editar(cod,
      {
        codigo:cod,      
        descripcion:this.productsFormEdit.controls['descripcion'].value, 
        precio:this.productsFormEdit.controls['precio'].value
      }
    );
  };
}
