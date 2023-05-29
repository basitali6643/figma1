import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page16PageRoutingModule } from './page16-routing.module';

import { Page16Page } from './page16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page16PageRoutingModule
  ],
  declarations: [Page16Page]
})
export class Page16PageModule {}
