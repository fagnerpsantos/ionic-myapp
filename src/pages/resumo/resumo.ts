import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClinicaProvider } from '../../providers/clinica/clinica';

/**
 * Generated class for the ResumoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resumo',
  templateUrl: 'resumo.html',
  providers: [
    ClinicaProvider
  ]
})
export class ResumoPage {
  public consultas_resumo = Array<any>();
  public faturamento_resumo_anterior = Array<any>();
  public faturamento_resumo_previsao = Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private clinicaProvider: ClinicaProvider
  ) {
  }

  ionViewDidLoad() {
    this.clinicaProvider.getResumo().subscribe(data => {
      const response = (data as any);
      console.log(response);
      this.consultas_resumo = response.consultas;
      this.faturamento_resumo_anterior = response.faturamento.anterior;
      this.faturamento_resumo_previsao = response.faturamento.previsao;

    }, error => {
      console.log(error);
    });
  }

}
