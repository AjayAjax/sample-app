import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { AutofocusDirective } from '../autofocus.directive';
import { User } from '../sampleComponent/user-data';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent implements OnInit {
  @ViewChild(AutofocusDirective,{static: false}) autofocus: AutofocusDirective;
  @Output() onOK: EventEmitter<User> = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
  }
  show = true;

  user: User;

  open(user: User) {
    this.show = true;
    this.user = Object.create(user); // clone the user (we don't want to modify the original in the dialog)

      setTimeout(() => {
        if (this.autofocus) {
          this.autofocus.setFocus();
        }
      }, 10);
    }

    close() {
      this.show = false;
    }

    onKeyPress(event) {
      if (event.keyCode === 13) {
        this.onOK.emit(this.user);
      }
    }

    onSubmit() {
      this.onOK.emit(this.user);
    }
}
