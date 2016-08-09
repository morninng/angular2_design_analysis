import { provideRouter, RouterConfig }  from '@angular/router';
import { TemplateParentComponent } from './Victor/TemplateSyntax/template-parent/template-parent.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: RouterConfig = [
  {
    path: 'template-parent',
    component: TemplateParentComponent
  },
  {
    path: '',
    component: DashboardComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];