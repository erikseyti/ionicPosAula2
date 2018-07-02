import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("Valor1: "+this.navParams.get("valor1"));
    console.log("Nome: "+this.navParams.get("nome"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

fecharDetalhes(){
  this.navCtrl.pop();
}
}
