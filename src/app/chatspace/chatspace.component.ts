import { Component, OnInit } from '@angular/core';
import {Chat} from '../chat';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-chatspace',
  templateUrl: './chatspace.component.html',
  styleUrls: ['./chatspace.component.css']
})
export class ChatspaceComponent implements OnInit {

  createChatFormVisible: boolean;
  chatModel = new Chat();

  get createChatDiagnostic() { return JSON.stringify(this.chatModel); }

  constructor(private __studentService: StudentService) { }

  ngOnInit() {
  }

  openCreateChatFrom(): void {
    this.createChatFormVisible = true;
  }

  closeCreateChatForm(): void {
    this.createChatFormVisible = false;
  }

  addChatGroup(): void {
    this.__studentService.createChatGroup(this.chatModel)
      .subscribe(data => {
        if (data.status === 200) {
          console.log('Successfully created chat group');
          window.location.reload();
        } else {
          console.log('Error Adding chat to chatspace, check server');
        }
      });
  }

}
