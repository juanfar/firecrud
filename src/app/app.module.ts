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
import { ChildService } from './services/child.service';
import { ChService } from './services/ch.service';
import { AuthService } from './services/auth.service';
import { SettingsService } from './services/settings.service';

// pipes
import { FilterPipe } from './pipes/filter.pipe';

// components
import { AppComponent } from './app.component';
import { ChildComponent } from './components/childs/child.component';
import { ChildsComponent } from './components/childs/childs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddChildComponent } from './components/add-child/add-child.component';
import { ChildDetailsComponent } from './components/child-details/child-details.component';
import { EditChildComponent } from './components/edit-child/edit-child.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ChildsListComponent } from './components/childs-list/childs-list.component';
import { TitleCasePipe } from './pipes/title-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ChildsComponent,
    ChildComponent,
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
    TitleCasePipe
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
    ChildService,
    ChService,
    AuthService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
