import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AppLibrosContentComponent } from './app-libros-content/app-libros-content.component';
import { LibrosRoutingModule } from './libros-routing.module';
import { AppLibrosAddComponent } from './app-libros-add/app-libros-add.component';

@NgModule({
  declarations: [
    AppLibrosContentComponent,
    AppLibrosAddComponent
  ],
  imports: [
      SharedModule,
      LibrosRoutingModule
  ],
  exports:[],
  providers: []
})
export class LibrosModule { }
