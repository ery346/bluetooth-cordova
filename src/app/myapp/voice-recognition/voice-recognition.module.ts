import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoiceRecognitionPageRoutingModule } from './voice-recognition-routing.module';

import { VoiceRecognitionPage } from './voice-recognition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoiceRecognitionPageRoutingModule
  ],
  declarations: [VoiceRecognitionPage]
})
export class VoiceRecognitionPageModule {}
