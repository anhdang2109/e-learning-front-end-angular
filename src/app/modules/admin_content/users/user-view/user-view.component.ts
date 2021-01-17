import { Component, OnInit } from '@angular/core';
import {Attempt} from '../../attempt/attempt.model';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  attempts: Attempt[];
  constructor() { }

  ngOnInit(): void {
  }

}
