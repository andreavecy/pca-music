import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongModalPage } from './song-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SongModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongModalPageRoutingModule {}
