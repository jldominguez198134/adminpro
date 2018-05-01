import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  LoginGuardGuard,
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService
 } from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoginGuardGuard,
    UsuarioService,
    SettingsService,
    SidebarService,
    SharedService
  ],
  declarations: []
})
export class ServiceModule { }
