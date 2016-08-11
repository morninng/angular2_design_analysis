import { provideRouter, RouterConfig }  from '@angular/router';
import { TemplateParentComponent } from './Victor/TemplateSyntax/template-parent/template-parent.component';
import {TodosComponent} from './Victor/ChangeDetection/todos/todos.component'
import { DashboardComponent } from './dashboard/dashboard.component'


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
  }

];

export const appRouterProviders = [
  provideRouter(routes)
];