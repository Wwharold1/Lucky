import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from './shared.material.module';
import { ThemeService } from './services/theme.service';
import { OnlyNumberDirective } from './directives/only-number.directive';

// SERVICES
@NgModule({
  declarations: [
    OnlyNumberDirective
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
  ],
  exports: [
    CommonModule,
    SharedMaterialModule,
    OnlyNumberDirective
  ],
  providers: [
    ThemeService
  ],
})
export class SharedModule { }
