import { Component, OnInit } from '@angular/core';
import {Module} from '../module';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';
import {AddTaskModel} from '../add-task-model';
import {Task} from '../task';
import {EditTaskModel} from '../edit-task-model';
import {CwModuleId} from '../cw-module-id';

@Component({
  selector: 'app-modulehub',
  templateUrl: './modulehub.component.html',
  styleUrls: ['./modulehub.component.css']
})
export class ModulehubComponent implements OnInit {
  constructor(private __studentService: StudentService, private __router: Router) { }

  // TODO: Remove this when done
  get diagnostic() { return JSON.stringify(this.model); }

  get addTaskDiagnostic() { return JSON.stringify(this.taskModel); }

  get editTaskDiagnostic() { return JSON.stringify(this.editTaskModel); }

  get addCWDiagnostic() { return JSON.stringify(this.addCWModel); }

  moduleFormVisible: boolean;
  taskFormVisible: boolean;
  model = new Module();
  taskModel = new AddTaskModel();
  editTaskModel = new EditTaskModel();
  modules: Module[];


  editTaskFormVisible: boolean;

  addCWModel = new CwModuleId();
  addCWFormVisible: boolean;

  selectedModule: Module;
  selectedParentModuleForTaskEdit: Module;
  selectedTask: Task;

  ngOnInit() {
    this.retrieveModules();
  }

  retrieveModules(): void {
    this.__studentService.getModules()
      .subscribe(data => {
        if (data.status === 200) {
          console.log('Gotten modules successfully');
          this.modules = data.body;
          // console.log(JSON.stringify(this.modules[0].module_tasks));
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

  closeEditTaskForm(): void {
    this.editTaskFormVisible = false;
  }

  editTaskFormOpen(): void {
    this.editTaskFormVisible = true;
  }

  saveModule(): void {
    this.__studentService.addModule(this.model)
      .subscribe(data => {
        if (data.status === 200) {
          console.log('Added module successfully');
          window.location.reload();
        } else {
          console.log('error adding module');
        }
      });
  }

  // When a module is selected
  onSelect(module: Module): void {
    this.selectedModule = module;
    this.taskModel.module_id = this.selectedModule.module_id;
  }

  // When a Task is selected
  onSelectEditTask(selectedTask: Task, parentModule: Module): void {
    this.selectedTask = selectedTask;
    this.selectedParentModuleForTaskEdit = parentModule;

    this.editTaskModel.module_id = this.selectedParentModuleForTaskEdit.module_id;
    this.editTaskModel.task_id = this.selectedTask.task_id;
    this.editTaskModel.task_status = this.selectedTask.task_status;
    this.editTaskModel.task_description = this.selectedTask.task_description;
  }

   onSelectAddCW(module: Module): void {
    this.addCWModel.module_id = module.module_id;
    this.addCWFormVisible = true;
   }

   closeAddCWForm(): void {
    this.addCWFormVisible = false;
   }

  saveTask(): void {
    this.__studentService.addTask(this.taskModel)
      .subscribe(data => {
        if (data.status === 200) {
          console.log('Added Task Successfully');
          window.location.reload();
        } else {
          console.log('Error adding task');
        }
      });
  }

  editTask(): void {
    this.__studentService.editTask(this.editTaskModel)
      .subscribe(data => {
        if (data.status === 200) {
          console.log('Edited Task Successfully');
          window.location.reload();
        } else {
          console.log('Error editing task');
        }
      });
  }

  saveCWToDB(): void {
    this.__studentService.addCoursework(this.addCWModel)
      .subscribe(data => {
        if (data.status === 200) {
          console.log('Added Coursework Successfully');
          window.location.reload();
        } else {
          console.log('Error Adding Coursework');
        }
      });
  }


}
