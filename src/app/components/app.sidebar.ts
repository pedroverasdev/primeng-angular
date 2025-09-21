import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SIDEBAR_MENU, SidebarMenuItem } from './sidebar-menu-items';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="fixed top-0 left-0 h-full w-64 shadow-lg flex flex-col z-40 transition-all bg-white dark:bg-surface-900 border-r border-gray-200 dark:border-surface-700">
      <div class="flex items-center gap-3 h-16 px-6 border-b border-gray-100 dark:border-surface-700">
        <img src="assets/sidebar-logo.svg" alt="Logo" class="w-8 h-8" />
        <span class="font-bold text-lg tracking-wide text-cyan-600 dark:text-cyan-400">SAKAI</span>
      </div>
      <nav class="flex-1 overflow-y-auto py-4 px-2 scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-cyan-50 dark:scrollbar-thumb-cyan-700 dark:scrollbar-track-surface-800 scroll-smooth">
        <div class="text-xs px-3 mb-2 text-gray-400 dark:text-gray-500">HOME</div>
        <a class="flex items-center gap-3 px-3 py-2 rounded-lg font-semibold mb-2 text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-surface-800" href="#">
          <i class="pi pi-home text-base"></i>
          Dashboard
        </a>
        <div class="text-xs px-3 mt-6 mb-2 text-gray-400 dark:text-gray-500">UI COMPONENTS</div>
        <ng-container *ngFor="let item of menu">
          <a class="flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-surface-800" href="#">
            <i class="pi" [ngClass]="item.icon"></i>
            <span>{{item.label}}</span>
          </a>
        </ng-container>
        <div class="text-xs px-3 mt-6 mb-2 text-gray-400 dark:text-gray-500">PAGES</div>
        <a class="flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-surface-800" href="#">
          <i class="pi pi-sign-in"></i>
          Auth
        </a>
        <a class="flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-surface-800" href="#">
          <i class="pi pi-file"></i>
          Landing
        </a>
      </nav>
    </aside>
  `,
  styles: [``]
})
export class AppSidebar {
  menu: SidebarMenuItem[] = SIDEBAR_MENU;
}
