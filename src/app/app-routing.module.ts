import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RadioChannelsComponent } from './components/radio-channels/radio-channels.component';
import { TvProgramsComponent } from './components/tv-programs/tv-programs.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';

const appRoutes: Routes = [
  { path: 'tv/guide', component: TvProgramsComponent },
  { path: 'tv/search', component: SearchComponent },
  { path: 'radio', component: RadioChannelsComponent },
  { path: '', redirectTo: 'tv/guide', pathMatch: 'full' },
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
