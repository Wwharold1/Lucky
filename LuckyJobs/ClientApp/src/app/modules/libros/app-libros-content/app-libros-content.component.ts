import { HttpParams } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Options } from 'ng5-slider';
import { LibroService } from '../../../../app/shared/services/libro.service';
import { AppLibrosAddComponent } from '../app-libros-add/app-libros-add.component';

@Component({
  selector: 'app-app-libros-content',
  templateUrl: './app-libros-content.component.html',
  styleUrls: ['./app-libros-content.component.scss'],
  providers: [LibroService]
})
export class AppLibrosContentComponent implements OnInit {
  displayedColumns: string[] = ['id_libro', 'descripcion', 'stock', 'actions'];
  
  dataSource: any;
  libros: any;
  value: number = 0;
  highValue: number = 0;
  options: Options = {
    floor: 0,
    ceil: 100
  };
  filterGroup: FormGroup;
  
  constructor(
    private readonly libroService :LibroService, 
    private readonly dialog       : MatDialog
  ) { }

  async ngOnInit() {
    this.filterGroup = new FormGroup({
      descripcion: new FormControl('',[Validators.required]),
      asignaturaId: new FormControl('',[Validators.required])
    })
    this.dataSource = await this.getLibros(0,'',0,0);
  }

  async getLibros(asignatura,descripcion,stockRangoInicio, stockRangoFin){
    const params = new HttpParams()
                            .append("IdAsignatura", asignatura)
                            .append("Descripcion", descripcion)
                            .append("StockRangoInicio",stockRangoInicio)
                            .append("StockRangoFin",stockRangoFin);
    var libros = await this.libroService.getAllLibros(params)
    this.libros = libros;
    return libros;
  }

  async buscar() {
    var idAsignatura = this.filterGroup.controls['asignaturaId'].value;
    var descripcion = this.filterGroup.controls['descripcion'].value;
    if(idAsignatura == "")
       idAsignatura = 0;
    this.dataSource = await this.getLibros(idAsignatura,descripcion,this.value,this.highValue);
  }

  async limpiar() {
    this.filterGroup.controls['asignaturaId'].setValue('0');
    this.filterGroup.controls['descripcion'].setValue('');
    this.value = 0;
    this.highValue = 0;
    await this.buscar();
  }
 
  openAddEditLibro(_id) {
    var libro = this.libros.find(m => m.id_libro == _id);
    if(libro == undefined)
      libro = { id_libro: 0};
    const dialogRef = this.dialog.open(AppLibrosAddComponent, {
      data        : { libro },
      disableClose: true,
      width       : "fit-content"
    })
    dialogRef.afterClosed().subscribe(() => this.ngOnInit())
  }

  async deleteLibro(_id){
    var model = { libro_id: parseInt(_id) };
    await this.libroService.deleteLibro(model);
    await this.ngOnInit();
  }
}
