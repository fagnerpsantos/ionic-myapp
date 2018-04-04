import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ClinicaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClinicaProvider {
  private caminhoApi = "http://projeto.devmedia.com.br/php/api-dashboard/api";

  constructor(public http: HttpClient) {
    console.log('Hello ClinicaProvider Provider');
  }

  getResumo() {
    return this.http.get(this.caminhoApi + "/resumo");
  }

  getConsultas() {
    return this.http.get(this.caminhoApi + "/consultas");
  }

  getFaturamento() {
    return this.http.get(this.caminhoApi + "/faturamento");
  }

}
