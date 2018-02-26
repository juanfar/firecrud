import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChildsListComponent } from './components/childs/childs-list/childs-list.component';
import { AddChildComponent } from './components/childs/add-child/add-child.component';
import { EditChildComponent } from './components/childs/edit-child/edit-child.component';
import { ChildDetailsComponent } from './components/childs/child-details/child-details.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VolListComponent } from './components/voluntarios/vol-list/vol-list.component';
import { AddVolComponent } from './components/voluntarios/add-vol/add-vol.component';
import { VolDetailsComponent } from './components/voluntarios/vol-details/vol-details.component';
import { EditVolComponent } from './components/voluntarios/edit-vol/edit-vol.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const app_routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'vols', component: VolListComponent},
    {path: 'vol/add', component: AddVolComponent},
    {path: 'vol/:id', component: VolDetailsComponent},
    {path: 'vol/edit/:id', component: EditVolComponent},
    {path: 'childs', component: ChildsListComponent},
    {path: 'child/add', component: AddChildComponent},
    {path: 'child/:id', component: ChildDetailsComponent},
    {path: 'child/edit/:id', component: EditChildComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: DashboardComponent},
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
