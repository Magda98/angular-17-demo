import { Routes } from '@angular/router';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { HelloComponent } from './hello/hello.component';
import { SignalsComponent } from './signals/signals.component';
import { DeferrableViewsComponent } from './deferrable-views/deferrable-views.component';

export const routes: Routes = [
  { path: '', component: HelloComponent, title: 'hello' },
  {
    path: 'control-flow',
    component: ControlFlowComponent,
    title: 'control flow',
  },
  {
    path: 'signals',
    component: SignalsComponent,
    title: 'signals',
  },
  {
    path: 'deferrable-views',
    component: DeferrableViewsComponent,
    title: 'deferrable views',
  },
];
