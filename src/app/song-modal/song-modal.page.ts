import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-song-modal',
  templateUrl: './song-modal.page.html',
  styleUrls: ['./song-modal.page.scss'],
})
export class SongModalPage implements OnInit {
  artstis_name:any;
  artstis_id:any;
  songs: any;
  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.artstis_name = this.navParams.get('name');
    this.artstis_id = this.navParams.get('id');
    this.songs = this.navParams.get('songs');
    console.log("songs", this.songs)
  }

  async closeModal(){
    await this.modalController.dismiss();
  }

  async selectSong(song:any){
    await this.modalController.dismiss(song);
  }

}
