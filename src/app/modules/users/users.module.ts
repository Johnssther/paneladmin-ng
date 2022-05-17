import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { IndexComponent } from './pages/index/index.component';
import { ShowComponent } from './pages/show/show.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './components/input-text/input-text.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    CreateComponent,
    IndexComponent,
    ShowComponent,
    InputTextComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ]
})
export class UsersModule { }
