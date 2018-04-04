import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClinicaProvider } from '../../providers/clinica/clinica';

/**
 * Generated class for the FaturamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faturamento',
  templateUrl: 'faturamento.html',
    providers: [
      ClinicaProvider
    ]
})
export class FaturamentoPage {
  public faturamentos = Array<any>();


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private clinicaProvider: ClinicaProvider
  ) {
  }

  ionViewDidLoad() {
    this.clinicaProvider.getFaturamento().subscribe(data => {
      const response = (data as any);
      console.log(response);
      this.faturamentos = response.detalhamento;
    }, error => {
      console.log(error);
    })
  }

}
