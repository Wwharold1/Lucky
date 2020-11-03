import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { __messageSnackBar } from 'src/app/shared/constants/utils';
import { LibroService } from 'src/app/shared/services/libro.service';
import { AppLibrosContentComponent } from '../../libros/app-libros-content/app-libros-content.component';

@Component({
  selector: 'app-app-libros-add',
  templateUrl: './app-libros-add.component.html',
  styleUrls: ['./app-libros-add.component.scss'],
  providers: [LibroService]
})
export class AppLibrosAddComponent implements OnInit {

  AddLibrosFormGroup: FormGroup;

  constructor(
    public dialogRef : MatDialogRef<AppLibrosContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
    private readonly libroService: LibroService
  ) { }

  ngOnInit(): void {
    var libro_id = this.data.libro.id_libro;
    var nombre = libro_id > 0 ? this.data.libro.descripcion : '';
    var stock = libro_id > 0 ? this.data.libro.stock : 0;
    var asignaturaId = libro_id > 0 ? this.data.libro.asignaturaId : 0;
    this.AddLibrosFormGroup = new FormGroup({
      nombre: new FormControl(nombre,[Validators.required]),
      cantidad: new FormControl(stock,[Validators.required]),
      asignatura: new FormControl(asignaturaId,[Validators.required]),
    });
  }

  async guardar(){
    var libro_id = parseInt(this.data.libro.id_libro);
    var nombre = this.AddLibrosFormGroup.controls['nombre'].value;
    var cantidad = parseInt(this.AddLibrosFormGroup.controls['cantidad'].value);
    var asignaturaId = parseInt(this.AddLibrosFormGroup.controls['asignatura'].value);
    if(nombre == '')
      return __messageSnackBar(this.snackBar,'Ingrese un nombre',2000);
    if(cantidad == 0|| cantidad == NaN)
      return __messageSnackBar(this.snackBar,'Ingrese una cantidad',2000);
    if(asignaturaId == 0 || asignaturaId == NaN)
      return  __messageSnackBar(this.snackBar,'Ingrese una asignatura',2000);
    var model = {
      libro_id,nombre,cantidad,asignaturaId
    }
    var d = await this.libroService.addUpdateLibro(model);
    console.log(d)
    this.dialogRef.close();
  }

}
