import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MenuModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Menu',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-home',
          },
          {
            label: 'Notes',
            icon: 'pi pi-pen-to-square',
          },
          {
            label: 'Workspace',
            icon: 'pi pi-folder',
          },
          {
            label: 'Todays Task',
            icon: 'pi pi-calendar-clock',
          },
          {
            label: 'All Tasks',
            icon: 'pi pi-calendar-plus',
          },
          {
            label: 'Calendar',
            icon: 'pi pi-calendar',
          },
        ],
      },
    ];
  }
}
