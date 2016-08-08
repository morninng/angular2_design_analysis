import { provideRouter, RouterConfig }  from '@angular/router';
import { TemplateParentComponent } from './Victor/TemplateSyntax/template-parent/template-parent.component';


const routes: RouterConfig = [
  {
    path: 'template-parent',
    component: TemplateParentComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];