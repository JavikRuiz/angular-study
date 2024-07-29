import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styles: [
  ]
})
export class ListMessagesComponent {
  constructor(public messagesServices: MessageService) { }

  messages:string[] = this.messagesServices.messages
}
