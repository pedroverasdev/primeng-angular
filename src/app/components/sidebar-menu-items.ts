export interface SidebarMenuItem {
  label: string;
  icon: string;
  route?: string;
  children?: SidebarMenuItem[];
}

export const SIDEBAR_MENU: SidebarMenuItem[] = [
  { label: 'Dashboard', icon: 'pi pi-home', route: '/' },
  { label: 'Form Layout', icon: 'pi pi-id-card' },
  { label: 'Input', icon: 'pi pi-pencil' },
  { label: 'Button', icon: 'pi pi-check-square' },
  { label: 'Table', icon: 'pi pi-table' },
  { label: 'List', icon: 'pi pi-list' },
  { label: 'Tree', icon: 'pi pi-sitemap' },
  { label: 'Panel', icon: 'pi pi-clone' },
  { label: 'Overlay', icon: 'pi pi-clone' },
  { label: 'Media', icon: 'pi pi-image' },
  { label: 'Menu', icon: 'pi pi-bars' },
  { label: 'Message', icon: 'pi pi-envelope' },
  { label: 'File', icon: 'pi pi-file' },
  { label: 'Chart', icon: 'pi pi-chart-bar' },
  { label: 'Timeline', icon: 'pi pi-calendar' },
  { label: 'Misc', icon: 'pi pi-cog' },
];
