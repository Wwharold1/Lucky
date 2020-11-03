import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLibrosContentComponent } from './app-libros-content/app-libros-content.component';

const routes: Routes = [
    {
        path     : '',
        component: AppLibrosContentComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LibrosRoutingModule { }
