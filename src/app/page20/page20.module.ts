import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page20PageRoutingModule } from './page20-routing.module';

import { Page20Page } from './page20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page20PageRoutingModule
  ],
  declarations: [Page20Page]
})
export class Page20PageModule {}
