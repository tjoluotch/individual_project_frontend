import {Message} from './message';

export class Chat {
  constructor(
    public chat_id?: string,
    public chat_name?: string,
    public members?: [string],
    public messages?: [Message]
  ) { }
}
