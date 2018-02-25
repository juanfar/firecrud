import { RouterModule, Routes } from '@angular/router';
import { ChildsListComponent } from './components/childs-list/childs-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddChildComponent } from './components/add-child/add-child.component';
import { EditChildComponent } from './components/edit-child/edit-child.component';
import { ChildDetailsComponent } from './components/child-details/child-details.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const app_routes: Routes = [
    {path: '', component: ChildsListComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'child/add', component: AddChildComponent},
    {path: 'child/edit/:id', component: EditChildComponent},
    {path: 'child/:id', component: ChildDetailsComponent},
    {path: 'settings', component: SettingsComponent},
    {path: '**', component: NotFoundComponent},
];

/*const app_routes: Routes = [
    { path: 'childs', component: ChildsComponent },
    { path: 'child/:id', component: ChildComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'childs' }
];*/

export const APP_ROUTING = RouterModule.forRoot(app_routes);
