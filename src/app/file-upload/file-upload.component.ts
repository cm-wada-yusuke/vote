import {Component, OnInit} from '@angular/core';
import {FileItem, FileUploader} from 'ng2-file-upload';
import {FormControl, Validators} from '@angular/forms';

// const URL = '/api/';
const URL = 'https://example.com/vote_uploader';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  public region: string;
  public regionControl: FormControl = new FormControl(this.region, [
    Validators.required
  ]);
  public uploader: FileUploader = new FileUploader({method: 'PUT'});
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  constructor() {
  }

  ngOnInit() {

    this.uploader.onBeforeUploadItem = (fileItem: FileItem) => {
      if (this.regionControl.hasError('required')) {
        this.uploader.cancelItem(fileItem);
      } else {
        fileItem.url = `${URL}/${this.region}?fileName=${fileItem._file.name}`;
        console.log(fileItem.url);
      }
    };

  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

}
