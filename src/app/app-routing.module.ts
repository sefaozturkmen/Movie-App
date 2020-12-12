import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovielistComponent } from './movielist/movielist.component';

const routes : Routes= [
  { path: '', redirectTo:'/dashboard', pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'movielist', component: MovielistComponent},
  { path: 'detail/:id', component: MovieDetailComponent}

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
