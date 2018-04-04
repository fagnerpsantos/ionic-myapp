import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResumoPage } from './resumo';

@NgModule({
  declarations: [
    ResumoPage,
  ],
  imports: [
    IonicPageModule.forChild(ResumoPage),
  ],
})
export class ResumoPageModule {}
