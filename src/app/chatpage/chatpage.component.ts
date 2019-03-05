import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Chat} from '../chat';
import {Message} from '../message';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {

  chatModel: Chat;

  sendMessageModel = new Message();

  msgContent = new FormControl('');

  messages: Message[];

  constructor(private __studentService: StudentService) { }

  ngOnInit() {
    this.getChatById();
  }

  getChatById(): void {
    this.__studentService.getChatById()
      .subscribe(data => {
        if (data.status === 200) {
          console.log('Gotten chat by id successfully');
          this.chatModel = data.body;
          this.messages = data.body.messages;
        } else {
          console.log('Issue getting chat by id');
        }
      });
  }

  sendMessage(): void {
    this.__studentService.sendMessage(this.sendMessageModel)
      .subscribe(data => {
        if (data.status === 200) {
          console.log('successfully sent message');
          window.location.reload();
        } else {
          console.log('Message did not send');
        }
      });
  }

  get sendMessageDiagnostic() {
    return JSON.stringify(this.sendMessageModel);
  }

}
