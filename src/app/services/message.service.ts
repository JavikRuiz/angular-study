import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() { }

  messages: string[] = []

  add(message:string) {
    if(message) {
      this.messages?.push(message)
    }
  }

}
