import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    MainRoutingModule,
    SharedModule,
  ],
  exports:[],
  providers: []
})
export class MainModule { }
