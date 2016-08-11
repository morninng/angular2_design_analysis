import { provideRouter, RouterConfig }  from '@angular/router';
import { TemplateParentComponent } from './Victor/TemplateSyntax/template-parent/template-parent.component';
import {TodosComponent} from './Victor/ChangeDetection/todos/todos.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import {StartwithScan5Component} from './egghead/startwith-scan-5/startwith-scan-5.component'

const routes: RouterConfig = [
  {
    path: 'template-parent',
    component: TemplateParentComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'change_detection',
    component: TodosComponent
  },
  {
    path: 'start_with_scan',
    component: StartwithScan5Component
  }

];

export const appRouterProviders = [
  provideRouter(routes)
];