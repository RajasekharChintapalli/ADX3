import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentumDashboardComponent }  from './documentum-dashboard/documentum-dashboard.component';
import { LoginComponent }  from './login/login.component';
import { RdopComponent }  from './rdop/rdop.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'documentumDashboard', component: DocumentumDashboardComponent },
  { path: 'rdop', component: RdopComponent },
  { path: 'fileUpload', component: FileUploadComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
