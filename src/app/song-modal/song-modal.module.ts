import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongModalPageRoutingModule } from './song-modal-routing.module';

import { SongModalPage } from './song-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongModalPageRoutingModule
  ],
  declarations: [SongModalPage]
})
export class SongModalPageModule {}
