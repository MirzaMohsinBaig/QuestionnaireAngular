import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from '../dashboard/dashboard.component';
import { UserProfileComponent} from '../user-profile/user-profile.component';

const routes: Routes = [
  
  { path: 'profile/:age', component: UserProfileComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }