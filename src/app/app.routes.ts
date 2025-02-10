import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DistributionComponent } from './graphs/distribution/distribution.component';
import { HorizontalBarComponent } from './graphs/horizontal-bar/horizontal-bar.component';
import { PerformanceComponent } from './graphs/performance/performance.component';
import { VerticalBarComponent } from './graphs/vertical-bar/vertical-bar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

export const routes: Routes = [
    {
        path: "dashboard", component: DashboardComponent,
        
    },
    {
        path:"pie",component:NavbarComponent
    }
];
