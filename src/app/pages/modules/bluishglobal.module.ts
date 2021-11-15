import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../main/layout/layout.component';
import { BannerComponent } from '../main/banner/banner.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../main/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "**",
        component: HomeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [LayoutComponent, BannerComponent, HomeComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class BluishglobalModule { }
