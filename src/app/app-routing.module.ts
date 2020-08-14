import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ListEstablishmentComponent} from './components/establishment/list-establishment/list-establishment.component';
import {EstablishmentFormComponent} from './components/establishment/establishment-form/establishment-form.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ListEstablishmentComponent
            },
            {
                path: 'establishment/add',
                component: EstablishmentFormComponent
            },
            {
                path: 'establishment/:id',
                component: EstablishmentFormComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
