import { Component, computed, inject } from "@angular/core";
import { LayoutService } from "../service/layout.service";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { StyleClassModule } from "primeng/styleclass";
import { AppConfig } from "./app.config";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, ButtonModule, StyleClassModule],
  template: `
    <header
      class="fixed top-0 left-0 w-full h-16 bg-white dark:bg-surface-900 shadow-sm flex items-center px-8 z-50"
    >
      <div class="flex items-center gap-3">
        <img src="assets/sidebar-logo.svg" alt="Logo" class="w-8 h-8" />
        <span
          class="font-bold text-lg tracking-wide text-cyan-600 dark:text-cyan-400"
          >SAKAI</span
        >
      </div>
      <nav class="ml-auto flex items-center gap-6">
        <button
          type="button"
          class="cursor-pointer flex items-center justify-center rounded-full hover:bg-surface-100 dark:hover:bg-surface-800 transition-all text-surface-900 dark:text-surface-0 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 dark:focus-visible:ring-offset-surface-950"
          (click)="toggleDarkMode()"
        >
          <i
            class="pi text-base"
            [ngClass]="{
              'pi-moon': isDarkMode(),
              'pi-sun': !isDarkMode()
            }"
          ></i>
        </button>
        <button
          class="transition text-gray-500 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400"
        >
          <i class="pi pi-globe text-xl"></i>
        </button>
        <button
          class="transition text-gray-500 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400"
        >
          <i class="pi pi-calendar text-xl"></i>
        </button>
        <button
          class="transition text-gray-500 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400"
        >
          <i class="pi pi-bell text-xl"></i>
        </button>
        <button
          class="transition text-gray-500 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400"
        >
          <i class="pi pi-user text-xl"></i>
        </button>
      </nav>
    </header>
  `,
  styles: [],
})
export class AppHeader {
  layoutService: LayoutService = inject(LayoutService);

  isDarkMode = computed(() => this.layoutService.appState().darkMode);

  toggleDarkMode() {
    this.layoutService.appState.update((state) => ({
      ...state,
      darkMode: !state.darkMode,
    }));
  }
}
