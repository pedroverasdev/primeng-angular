import { Component } from '@angular/core';
import { AppHeader } from './components/app.header';
import { AppSidebar } from './components/app.sidebar';
import { AppFooter } from './components/app.footer';
import { AppTopbar } from './components/app.topbar';
import { StatsWidget } from "./components/dashboard/statswidget";
import { SalesTrendWidget } from "./components/dashboard/salestrendwidget";
import { RecentActivityWidget } from "./components/dashboard/recentactivitywidget";
import { ProductOverviewWidget } from "./components/dashboard/productoverviewwidget";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHeader, AppSidebar, AppFooter, AppTopbar, StatsWidget, SalesTrendWidget, RecentActivityWidget, ProductOverviewWidget],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
