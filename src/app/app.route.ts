import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChildsListComponent } from './components/childs/childs-list/childs-list.component';
import { AddChildComponent } from './components/childs/add-child/add-child.component';
import { EditChildComponent } from './components/childs/edit-child/edit-child.component';
import { ChildDetailsComponent } from './components/childs/child-details/child-details.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const app_routes: Routes = [
    {path: '', component: ChildsListComponent},
    {path: 'childs', component: ChildsListComponent},
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
