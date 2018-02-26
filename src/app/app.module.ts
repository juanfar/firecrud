import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

// environment
import { environment } from '../environments/environment';

// rutas
import { APP_ROUTING } from './app.route';

// servicios
import { ChService } from './services/ch.service';
import { VolService } from './services/vol.service';
import { AuthService } from './services/auth.service';
import { SettingsService } from './services/settings.service';

// pipes
import { FilterPipe } from './pipes/filter.pipe';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChildsListComponent } from './components/childs/childs-list/childs-list.component';
import { AddChildComponent } from './components/childs/add-child/add-child.component';
import { ChildDetailsComponent } from './components/childs/child-details/child-details.component';
import { EditChildComponent } from './components/childs/edit-child/edit-child.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { VolListComponent } from './components/voluntarios/vol-list/vol-list.component';
import { AddVolComponent } from './components/voluntarios/add-vol/add-vol.component';
import { VolDetailsComponent } from './components/voluntarios/vol-details/vol-details.component';
import { EditVolComponent } from './components/voluntarios/edit-vol/edit-vol.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddChildComponent,
    ChildDetailsComponent,
    EditChildComponent,
    SettingsComponent,
    NotFoundComponent,
    ChildsListComponent,
    FilterPipe,
    TitleCasePipe,
    VolListComponent,
    AddVolComponent,
    VolDetailsComponent,
    EditVolComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'childs-app'),
    AngularFirestoreModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    ChService,
    VolService,
    AuthService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
