import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {StudentService} from '../student.service';
import {Document} from '../document';

@Component({
  selector: 'app-doc-upload',
  templateUrl: './doc-upload.component.html',
  styleUrls: ['./doc-upload.component.css']
})
export class DocUploadComponent implements OnInit {

  selectedFile: File;
  constructor(private http: HttpClient, private __studentService : StudentService) { }
  docs: Document[];

  ngOnInit() {
    this.retrieveUploads();
  }

  retrieveUploads(): void {
    this.__studentService.getUploads()
      .subscribe(data => {
        if (data.status === 200) {
          console.log('Gotten uploads successfully');
          this.docs = data.body;
          // console.log(JSON.stringify(this.modules[0].module_tasks));
        } else {
          console.log('Error Getting Modules');
        }
      });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http.post('/api/uploadfile', uploadData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event);
        window.location.reload();
      });
  }
}
