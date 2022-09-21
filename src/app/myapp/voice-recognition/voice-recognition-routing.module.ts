import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoiceRecognitionPage } from './voice-recognition.page';

const routes: Routes = [
  {
    path: '',
    component: VoiceRecognitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoiceRecognitionPageRoutingModule {}
