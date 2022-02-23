import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinicodeComponent } from './pages/minicode/minicode.component';

const routes: Routes = [
  { path: 'mini', component:MinicodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
