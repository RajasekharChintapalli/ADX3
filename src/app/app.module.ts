import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { FileDropModule } from 'ngx-file-drop'

import { AppComponent }         from './app.component';
import { MessagesComponent }    from './messages/messages.component';
import { HttpErrorHandler }     from './http-error-handler.service';
import { DocumentumDashboardComponent } from './documentum-dashboard/documentum-dashboard.component';
import { MessageService }       from './message.service';

import { AppRoutingModule }     from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RdopComponent } from './rdop/rdop.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { LoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    FileDropModule,
    LoadingModule
  ],
  declarations: [
    AppComponent,
    MessagesComponent,
    DocumentumDashboardComponent,
    LoginComponent,
    RdopComponent,
    FileUploadComponent,    
  ],
  providers: [
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
