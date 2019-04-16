import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Chat} from '../chat';
import {Message} from '../message';
import {FormControl} from '@angular/forms';
import {Student} from '../student';

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

  students: Student[];

  openEditName = true;
  openAddMember: boolean;

  editGroupNameModel = new Chat();

  addMemberModel = new Student();

  constructor(private __studentService: StudentService) { }

  ngOnInit() {
    this.getChatById();
    this.retrieveStudents();
  }

  retrieveStudents(): void {
    this.__studentService.getAllStudents()
      .subscribe(data => {
        if (data.status === 200) {
          console.log('Gotten Students successfully');
          this.students = data.body;
          // console.log(JSON.stringify(this.modules[0].module_tasks));
        } else {
          console.log('Error Getting Students');
        }
      });
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

  editGrpName(): void {
    this.__studentService.editGrpName(this.editGroupNameModel)
      .subscribe(data => {
        if (data.status === 200) {
          console.log('successfully edited group chat name');
          window.location.reload();
        } else {
          console.log('Error, group name was not edited');
        }
      });
  }

  addMember(): void {
    this.__studentService.addMember(this.addMemberModel)
      .subscribe(data => {
        if (data.status === 200) {
          console.log('successfully added member');
          window.location.reload();
        } else {
          console.log('Member was not added');
        }
      });
  }

  get addMemberDiagnostic() {
    return JSON.stringify(this.addMemberModel);
}

  get sendMessageDiagnostic() {
    return JSON.stringify(this.sendMessageModel);
  }

  get editGroupNameDiagnostic() {
    return JSON.stringify(this.editGroupNameModel);
  }

  editNameButtonClicked(): void {
    this.openEditName = true;
    this.openAddMember = false;
  }

  addMemberButtonClicked(): void {
    this.openAddMember = true;
    this.openEditName = false;
  }
}
