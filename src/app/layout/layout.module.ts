import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ConseillerComponent } from './conseiller/conseiller.component';
import { ClientComponent } from './client/client.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminnavComponent } from './shared/adminnav/adminnav.component';
import { LoginmodalComponent } from './shared/navbar/loginmodal/loginmodal.component';
import { RegistreModalComponent } from './shared/navbar/registre-modal/registre-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/MaterialModule';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AuthAdminLayoutComponent } from './auth-admin-layout/auth-admin-layout.component';
import { RegistreAdminLayoutComponent } from './registre-admin-layout/registre-admin-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { ConseillernavComponent } from './shared/conseillernav/conseillernav.component';
import { LoginComponent } from '../views/conseiller/login/login.component';
import { RegistreConsComponent } from '../views/conseiller/registre-cons/registre-cons.component';



@NgModule({
  declarations: [
    AdminComponent,
    ConseillerComponent,
    ClientComponent,
    LoginComponent,
    RegistreConsComponent,
    NavbarComponent,
    FooterComponent,
    AdminnavComponent,
    LoginmodalComponent,
    RegistreModalComponent,
    AuthAdminLayoutComponent,
    RegistreAdminLayoutComponent,
    ConseillernavComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class LayoutModule { }
