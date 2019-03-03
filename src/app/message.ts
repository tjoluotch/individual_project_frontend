import {Student} from './student';

export class Message {
  constructor(
    public msg_id?: string,
    public msg_content?: string,
    public sender?: Student,
    public sent_at?: string
  ) { }
}
