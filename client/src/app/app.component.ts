import { Component } from '@angular/core';
import { User } from "../../../src/User";
import { TestEntry } from "../../../src/test/models/TestEntry";

import { TestingCompilerFactory } from '@angular/core/testing/src/test_compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'client';
  user = new User();
  testEntry = new TestEntry();

  constructor() {
    this.user.name = "works??";
    this.testEntry.SerialNumber = "abcd1";
  }
}
