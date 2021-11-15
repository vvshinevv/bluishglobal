import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BluishglobalModule } from './pages/modules/bluishglobal.module';

const routes: Routes = [];

@NgModule({
  imports: [BluishglobalModule, RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
