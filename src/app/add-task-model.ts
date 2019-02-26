export class AddTaskModel {
  constructor(
    public module_id?: string,
    public task_description?: string,
    // 3 types of status: 'Not Started', 'working on it', 'finished'.
    public task_status?: string
  ) { }
}
