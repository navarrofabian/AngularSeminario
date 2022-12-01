import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { BitrexContactComponent } from './bitrex-contact/bitrex-contact.component';
import { BitrexProductsComponent } from './bitrex-products/bitrex-products.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'bitrexProduct',
        pathMatch: 'full'
    },
    {
        path: 'bitrexProduct',
        component: BitrexProductsComponent
    },
    {
        path: 'contact',
        component: BitrexContactComponent
    },
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule { }