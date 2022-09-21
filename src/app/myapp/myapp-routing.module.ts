import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyappPage } from './myapp.page';

const routes: Routes = [
  {
    path: '',
    component: MyappPage,
    children: [
      {
        path: 'buttons',
        loadChildren: () => import('./buttons/buttons.module').then( m => m.ButtonsPageModule)
      },
      {
        path: 'voice-recognition',
        loadChildren: () => import('./voice-recognition/voice-recognition.module').then( m => m.VoiceRecognitionPageModule)
      },
      {
        path: 'input-text',
        loadChildren: () => import('./input-text/input-text.module').then( m => m.InputTextPageModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  },


  // {
  //   path: 'buttons',
  //   loadChildren: () => import('./buttons/buttons.module').then( m => m.ButtonsPageModule)
  // },
  // {
  //   path: 'voice-recognition',
  //   loadChildren: () => import('./voice-recognition/voice-recognition.module').then( m => m.VoiceRecognitionPageModule)
  // },
  // {
  //   path: 'input-text',
  //   loadChildren: () => import('./input-text/input-text.module').then( m => m.InputTextPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyappPageRoutingModule {}
