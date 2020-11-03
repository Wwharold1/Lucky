import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';

const routes: Routes = [
    {
        path     : '',
        component: NavbarComponent,
        children : [
            {
                path:'libros',
                loadChildren: () => import('./libros/libros.module').then(m => m.LibrosModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
