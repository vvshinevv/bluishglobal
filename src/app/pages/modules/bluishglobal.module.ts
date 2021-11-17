import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../main/layout/layout.component';
import { BannerComponent } from '../main/banner/banner.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../main/home/home.component';
import { ContactComponent } from '../main/contact/contact.component';
import { AboutComponent } from '../main/about/about.component';
import { ProductComponent } from '../main/product/product.component';
import { TradeComponent } from '../main/trade/trade.component';
import { CommerceComponent } from '../main/commerce/commerce.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "product",
        component: ProductComponent
      },
      {
        path: "trade",
        component: TradeComponent
      },
      {
        path: "commerce",
        component: CommerceComponent
      },
      {
        path: "**",
        component: HomeComponent
      },

    ]
  }
]

@NgModule({
  declarations: [LayoutComponent, BannerComponent, HomeComponent, ContactComponent, AboutComponent, ProductComponent, TradeComponent, CommerceComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class BluishglobalModule { }
