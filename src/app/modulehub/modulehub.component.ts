import { Component, OnInit } from '@angular/core';
import {Module} from '../module';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';
import {AddTaskModel} from '../add-task-model';

@Component({
  selector: 'app-modulehub',
  templateUrl: './modulehub.component.html',
  styleUrls: ['./modulehub.component.css']
})
export class ModulehubComponent implements OnInit {
  constructor(private __studentService: StudentService, private __router: Router) { }

  // TODO: Remove this when done
  get diagnostic() { return JSON.stringify(this.model); }

  get taskDiagnostic() { return JSON.stringify(this.taskModel); }

  moduleFormVisible: boolean;
  taskFormVisible: boolean;
  model = new Module();
  taskModel = new AddTaskModel();
  modules: Module[];

  selectedModule: Module;

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
    this.moduleFormVisible = true;
  }

  closeModuleBox(): void {
    this.moduleFormVisible = false;
  }

  addTaskForm(): void {
    console.log('clicked add task button');
    this.taskFormVisible = true;
  }

  closeTaskForm(): void {
    this.taskFormVisible = false;
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

  onSelect(module: Module): void {
    this.selectedModule = module;
    this.taskModel.module_id = this.selectedModule.module_id;
  }

}
