import { Component, OnInit } from '@angular/core';
import {Module} from '../module';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modulehub',
  templateUrl: './modulehub.component.html',
  styleUrls: ['./modulehub.component.css']
})
export class ModulehubComponent implements OnInit {

  formVisible: boolean;
  model = new Module();
  modules: Module[];
  constructor(private __studentService: StudentService, private __router: Router) { }

  ngOnInit() {
    this.retrieveModules();
  }

  retrieveModules(): void {
    this.__studentService.getModules()
      .subscribe(data => {
        if (data.status === 200) {
          console.log('Gotten modules successfully');
          this.modules = data.body;
        } else {
          console.log('Error Getting Modules');
        }
      });
  }

  addUModule(): void {
    console.log('clicked module button');
    this.formVisible = true;
    // TODO: Add popup form through child Router outlet and fill in
  }

  saveModule(): void {
    this.__studentService.addModule(this.model)
      .subscribe(data => {
        if (data.status === 200) {
          console.log('Added module successfully');
          window.location.reload();
        } else {
          console.log('error adding message');
        }
      });
  }

  closeModuleBox(): void {
    this.formVisible = false;
  }

  // TODO: Remove this when done
  get diagnostic() { return JSON.stringify(this.model); }

}
