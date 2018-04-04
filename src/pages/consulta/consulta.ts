import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClinicaProvider } from '../../providers/clinica/clinica';

/**
 * Generated class for the ConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulta',
  templateUrl: 'consulta.html',
    providers: [
      ClinicaProvider
    ]
})
export class ConsultaPage {
  public consultas_realizadas = Array<any>();
  public consultas_marcadas = Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private clinicaProvider: ClinicaProvider) {
  }

  ionViewDidLoad() {
    this.clinicaProvider.getConsultas().subscribe(data => {
      const response = (data as any);
      console.log(response);
      this.consultas_realizadas = response.realizadas;
      this.consultas_marcadas = response.marcadas;
    }, error => {
      console.log(error);
    })
  }

}
