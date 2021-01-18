import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarClaveComponent } from './components/recuperar-clave/recuperar-clave.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VerificarEmailComponent } from './components/verificar-email/verificar-email.component';

const routes: Routes = [
  {path:'',redirectTo:'/registro', pathMatch:'full'},
  {path:'registro', component: RegistroComponent},
  {path:'login',component: LoginComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path:'recuperar', component:RecuperarClaveComponent},
  {path:'verificar-email',component:VerificarEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
