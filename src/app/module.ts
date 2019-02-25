import {Task} from './task';

export class Module {
  constructor(
    public module_id?: string,
    public student_id?: string,
    public module_name?: string,
    public module_notes?: string,
    public module_tasks?: [Task]
  ) { }
}
