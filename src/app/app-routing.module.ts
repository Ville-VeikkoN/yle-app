import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RadioChannelsComponent } from './components/radio-channels/radio-channels.component';
import { TvProgramsComponent } from './components/tv-programs/tv-programs.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'radio', component: RadioChannelsComponent },
  { path: 'tv', component: TvProgramsComponent },
  { path: '', redirectTo: 'tv', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
