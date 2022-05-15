import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';
import { ClientComponent } from './layout/client/client.component';
import { ConseillerComponent } from './layout/conseiller/conseiller.component';
import { RegistreAdminLayoutComponent } from './layout/registre-admin-layout/registre-admin-layout.component';
import { LoginComponent } from './views/conseiller/login/login.component';
import { RegistreConsComponent } from './views/conseiller/registre-cons/registre-cons.component';



const routes: Routes = [
  //client
  {path:'',component:ClientComponent,children:[
    {path:'',loadChildren:()=>import('./views/client/home/home.module').then(m=>m.HomeModule)},
   {path:'calendar/:id',loadChildren:()=>import('./views/client/calendar/calendar.module').then(m=>m.CalendarModule)},
    {path:'rdv',loadChildren:()=>import('./views/client/mesrdv/mesrdv.module').then(m=>m.MesrdvModule)},
   ]},
   //admin
  {path:'admin',component:AdminComponent,children:[
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  // {path:'loginAdmin',loadChildren:()=>import('./views/admin/login/login.module').then(m=>m.LoginModule)}
  ]},
  {path:'adminlogin',component:AuthAdminLayoutComponent},
  {path:'adminregistre',component:RegistreAdminLayoutComponent},
 //conseiller
  {path:'conseillerlogin',component:LoginComponent},
  {path:'conseillerregistre',component:RegistreConsComponent},
  {path:'conseiller',component:ConseillerComponent,children:[
    {path:'MesRendezvous',loadChildren:()=>import('./views/conseiller/conseillerlogin/conseillerlogin.module').then(m=>m.ConseillerloginModule)},
    {path:'calendar',loadChildren:()=>import('./views/conseiller/conseillerdash/conseillerdash.module').then(m=>m.ConseillerdashModule)}  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
