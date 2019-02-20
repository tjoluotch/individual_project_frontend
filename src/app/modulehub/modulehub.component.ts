import { Component, OnInit } from '@angular/core';
import {Module} from '../module';

@Component({
  selector: 'app-modulehub',
  templateUrl: './modulehub.component.html',
  styleUrls: ['./modulehub.component.css']
})
export class ModulehubComponent implements OnInit {

  formVisible: boolean;
  model = new Module();
  constructor() { }

  ngOnInit() {
  }

  addUModule(): void {
    console.log('clicked module button');
    this.formVisible = true;
    // TODO: Add popup form through child Router outlet and fill in
  }

  closeModuleBox(): void {
    this.formVisible =false;
  }

  // TODO: Remove this when done
  get diagnostic() { return JSON.stringify(this.model); }

}
