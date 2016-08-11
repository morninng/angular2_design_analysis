import { provideRouter, RouterConfig }  from '@angular/router';
import { TemplateParentComponent } from './Victor/TemplateSyntax/template-parent/template-parent.component';
import {TodosComponent} from './Victor/ChangeDetection/todos/todos.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import {StartwithScan5Component} from './egghead/startwith-scan-5/startwith-scan-5.component'
import {CountComponent} from './ngrx/count/count.component'
import {ClockReducerComponent} from './egghead/clock-reducer/clock-reducer.component';

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
  },
  {
    path: 'count_component',
    component: CountComponent
  },
  {
    path: "Clock_Reducer",
    component: ClockReducerComponent
  }

];

export const appRouterProviders = [
  provideRouter(routes)
];