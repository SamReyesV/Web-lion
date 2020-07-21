import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WorksComponent } from './components/works/works.component';





export const  ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    {path: 'works', component: WorksComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
];
