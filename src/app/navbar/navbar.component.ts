import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // TODO: Find a way to implement middleware to check for a JWT and see if the person is logged in, if not they csn't access
  // TODO: Navs like docspace,modules, chat
}
