import {Task} from './task';
import {Coursework} from './coursework';

export class Module {
  constructor(
    public module_id?: string,
    public student_id?: string,
    public module_name?: string,
    public module_notes?: string,
    public tasks?: [Task],
    public cwks?: [Coursework]
  ) { }
}
