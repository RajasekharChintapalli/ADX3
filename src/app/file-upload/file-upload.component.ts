import { Component, OnInit } from '@angular/core';
import { UploadEvent, UploadFile, FileSystemFileEntry } from 'ngx-file-drop';
import { rdopService } from '../rdop/rdop.service';


export interface ADXOBJ {
  sessionId : string;
  accessId: string;
  parent : string;
};

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [ rdopService ],
  
})



export class FileUploadComponent implements OnInit {
  public files: UploadFile[] = [];
  
  public loading = false;
  config: ADXOBJ;
  sessionId = null;
  customAttribute = {
    createdbyuser :"Iris TEST175",
    fileName:"",
    requestno:"EPR_01091",  
    rtr_id:"12095",
    rtrversion:"0.0"
  }

  NONGXP_FOLDER_ID = "0b01bb5880113ae3";
  GXP_FOLDER_ID = "0b01bb5880113ae4";
  documentType = "rdop_toxicology";
  ADX_ENDPOINT_ADDRESS = "https://adx-core-it.jnj.com:8443/tribefire-agiledocs-cartridge";
  ACCESS_ID = "ad.document.access.cmis"
  
  constructor(private rdopService: rdopService) { }

  ngOnInit() {
    this.getSession();
   
  }

  public dropped(event: UploadEvent) {
  
    this.files = event.files;
    for (const droppedFile of event.files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
          this.fileUpload(file,"Attachment");
         
        });
      };
    }
  }

  getSession(): void{
    this.loading = true;
    this.rdopService.getSession().subscribe(response => {
      this.sessionId=response;
      console.log(this.sessionId);
      this.loading = false;
      this.fileSearch();
    });
  }

  fileUpload(fileObj,fileType){
      
      let folderId = "";
      if(fileType == "Attachment" || fileType == "Reports" ){
        folderId = this.NONGXP_FOLDER_ID;
      }else if(fileType == "Final RTR"){
        folderId = this.GXP_FOLDER_ID;
      }
    
        let documentType = "rdop_toxicology";
        let metaData = [ {
          "name" : "doctype",
          "value" : fileType,
          "type" : "string"
        }, {
          "name" : "rtr_id",
          "value" : this.customAttribute.rtr_id,
          "type" : "string"
        }, {
          "name" : "requestno",
          "value" : this.customAttribute.requestno,
          "type" : "string"
        }, {
          "name" : "rtrversion",
          "value" : this.customAttribute.rtrversion,
          "type" : "string"
        },{
          "name" : "createdbyuser",
          "value" : this.customAttribute.createdbyuser,
          "type" : "string"
        }];
      
 		   	let formData = new FormData();
 			  formData.append('sessionId', this.sessionId);
 		   	formData.append('accessId', this.ACCESS_ID);
 		   	formData.append('parent', folderId);
 		   	formData.append('content', fileObj);
 		    formData.append('documentType', documentType);
	      formData.append('metadata', JSON.stringify(metaData));
        formData.append('directUpload', 'true');
        this.loading = true;
        this.rdopService.fileUpload(formData).subscribe(response => {
          console.log(response);
          this.loading = false;
        });
        
 		   	
  }
 
  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }

  fileSearch(){
    this.loading = true;
    this.config = {
      accessId: this.ACCESS_ID,
      sessionId:  this.sessionId,
      parent:"0b01bb58801e1f61"
    };
  
    this.rdopService.getFolderContent(this.config).subscribe(response => {
      console.log(response);
      this.loading = false;
    });
  }

 

}
