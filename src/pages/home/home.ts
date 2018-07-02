import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  chamarDetalhesSemParametros()
  {
    this.navCtrl.push(DetalhesPage);
  }

  chamarDetalhesComParametros()
  {
    this.navCtrl.push(DetalhesPage,{"valor1":10,"valor2":20,"nome":"José"});
  }

}
