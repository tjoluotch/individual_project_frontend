import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatspace',
  templateUrl: './chatspace.component.html',
  styleUrls: ['./chatspace.component.css']
})
export class ChatspaceComponent implements OnInit {

  createChatFormVisible: boolean;

  constructor() { }

  ngOnInit() {
  }

  openCreateChatFrom(): void {
    this.createChatFormVisible = true;
  }

  closeCreateChatForm(): void {
    this.createChatFormVisible = false;
  }

}
