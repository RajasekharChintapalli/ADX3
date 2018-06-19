import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { ADXOBJ } from '../file-upload/file-upload.component';

const httpOptions = {
  headers: new HttpHeaders({
    'accept': 'application/json',
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};

const httpUploadOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json;charset=UTF-8'
    })   
  };


  


@Injectable()
export class rdopService {
    private handleError: HandleError;
    sessionId = null;
    constructor(
        private http: HttpClient,
        httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('HeroesService');
    };

    ADX_OBJECT = {
        url:""
    };

  setSession(id){
    this.sessionId=id;
  }

  getSession () : Observable<{}>  {
    this.ADX_OBJECT.url = "https://adx-core-it.jnj.com:8443/tribefire-agiledocs-cartridge/rest/authenticate";
   
    let body = new URLSearchParams();
    body.set('user', 'CG510_TOX_POC_SERVICE_ACCT');
    body.set('password', 'TestPOC#1234');

    return this.http.post(this.ADX_OBJECT.url,body.toString(),httpOptions).pipe(
        catchError(this.handleError('getSession'))
    );
  }

  fileUpload (formData : FormData) : Observable<{}>  {
    this.ADX_OBJECT.url = "https://adx-core-it.jnj.com:8443/tribefire-agiledocs-cartridge/docupload";
    
    return this.http.post(this.ADX_OBJECT.url,formData).pipe(
        catchError(this.handleError('fileUpload'))
    );
  }

  getFolderContent (adx : ADXOBJ) : Observable<{}>  {
    let url ="https://adx-core-it.jnj.com:8443/tribefire-services/rest/query?sessionId="+adx.sessionId+"&accessId="+adx.accessId+"&statement=from%20com.braintribe.model.resourcerepository.Content%20where%20parent%20%3D%20%22"+adx.parent+"%22";
    return this.http.get(url,httpUploadOptions).pipe(
        catchError(this.handleError('getFolderContent'))
    );
  }



 
};


