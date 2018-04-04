import { Component } from '@angular/core';

import { ResumoPage } from '../resumo/resumo';
import { ConsultaPage } from '../consulta/consulta';
import { FaturamentoPage } from '../faturamento/faturamento';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ResumoPage
  tab2Root = ConsultaPage
  tab3Root = FaturamentoPage

  constructor() {

  }
}
