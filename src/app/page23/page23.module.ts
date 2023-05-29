import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page23PageRoutingModule } from './page23-routing.module';

import { Page23Page } from './page23.page';
import { Task1Component } from '../task1/task1.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page23PageRoutingModule
  ],
  declarations: [Page23Page,  Task1Component ]
})
export class Page23PageModule {}
