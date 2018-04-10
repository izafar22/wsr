import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaselayoutComponent } from './layout/baselayout/baselayout.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { ContentComponent } from './layout/content/content.component';
import { HomelayoutComponent } from './layout/homelayout/homelayout.component';

const routes: Routes = [
  {path: '', component: HomelayoutComponent},
  {path: 'project/:id', component: ContentComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
