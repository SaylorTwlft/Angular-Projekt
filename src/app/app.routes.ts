import { Routes } from '@angular/router';
import { CreatePersonComponent } from './create-person/create-person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { EditPersonComponent } from './edit-person/edit-person.component';

export const routes: Routes = [
    { path: "", redirectTo: "/create", pathMatch: "full" },
    { path: "create", component: CreatePersonComponent },
    { path: "list-person", component: ListPersonComponent },
    { path: "update-person/:id", component: EditPersonComponent },
];
