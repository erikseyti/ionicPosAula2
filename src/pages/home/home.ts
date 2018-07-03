import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { DetalhesPage } from '../detalhes/detalhes';
import { Imc } from '../../model/Imc';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imc:Imc = new Imc();

  constructor(public navCtrl: NavController, public http:Http) {

  }

  cadastrarImc(){
    this.http.post("http://200.17.98.122:8080/hellows/rest/service/inserirImc", this.imc)
    .retry(2)
    .map(res => res.json())
    .subscribe(
      data => {
        alert(data.situacao);
        console.log(data);
      },
      error => {
        alert(error);
      }
    );
  }

  converterNumber(numero):number{
    return parseFloat(numero);
  }

  chamarDetalhesSemParametros(){
    this.navCtrl.push(DetalhesPage);
  }

  chamarDetalhesComParametros(){
    this.navCtrl.push(DetalhesPage,{'usuario':this.imc.usuario});
  }

  definirDetalhesRaiz(){
    this.navCtrl.setRoot(DetalhesPage);
  }
}
