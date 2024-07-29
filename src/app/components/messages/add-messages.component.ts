import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styles: [
  ]
})
export class AddMessagesComponent {
  constructor(public messagesServices: MessageService) { }

  message:string = ''

  addMessage() {
    this.messagesServices.add(this.message)
    this.message = ''
  }
}
