import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'filter',
        loadChildren:()=>import('./modules/filters/filters.module').then((m=>m.FiltersModule))
        
      },
      {
        path: 'master',
        loadChildren:()=>import('./modules/master/master.module').then((m=>m.MasterModule))

      },
      {
        path: 'project',
        loadChildren:()=>import('./modules/projects/projects.module').then((m=>m.ProjectsModule))

      },
      {
        path: 'teams',
        loadChildren:()=>import('./modules/teams/teams.module').then((m=>m.TeamsModule))

      },
      {
        path: 'yourwork',
        loadChildren:()=>import('./modules/your-work/your-work.module').then((m=>m.YourWorkModule))

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
