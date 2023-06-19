import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeNewComponent } from './user-home-new/user-home-new.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';

const routes: Routes = [
  // {path:'user',component:UserHomeNewComponent},
  // {path:'user-new',component:UserHomePageComponent},
  // {path:'',component:UserHomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
