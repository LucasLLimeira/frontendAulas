import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

export const routes: Routes = [
    {path:"", redirectTo:"/home", pathMatch: "full"},
    {path:"home", component: HomeComponent},
    {path:"listar", component: ListarComponent},
    {path:"cadastro", component: CadastroComponent}];

export default routes;

