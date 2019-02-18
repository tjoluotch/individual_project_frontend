import { Component, OnInit } from '@angular/core';
import {listener} from '@angular/core/src/render3';

@Component({
  selector: 'app-modulehub',
  templateUrl: './modulehub.component.html',
  styleUrls: ['./modulehub.component.css']
})
export class ModulehubComponent implements OnInit {

  formVisible: boolean;

  constructor() { }

  ngOnInit() {
  }

  addUModule(): void {
    console.log('clicked module button');

    // TODO: Add popup form through child Router outlet and fill in
  }

  // TODO: Remove this when done
  get diagnostic() { return JSON.stringify(this.model); }

}
