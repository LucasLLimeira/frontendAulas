import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';

export const routes: Routes = [
    {path:"", redirectTo:"/home", pathMatch: "full"},
    {path:"home", component: HomeComponent},
    {path:"listar", component: ListarComponent}];

export default routes;

