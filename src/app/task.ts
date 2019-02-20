export class Task {
  constructor(
   public task_id?: string,
   public task_description?: string,
   // 3 types of status: 'Not Started', 'working on it', 'finished'.
   public task_status?: string
  ) { }
}
