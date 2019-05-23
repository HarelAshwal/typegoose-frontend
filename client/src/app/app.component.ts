import { Component } from '@angular/core';
import { User } from "../../../src/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'client';
  user = new User();

  constructor() {
    this.user.name = "works??";
  }
}
