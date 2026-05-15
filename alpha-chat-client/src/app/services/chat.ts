import { Injectable, signal } from '@angular/core';
import { FullChat } from '../components/inbox/models/temp-full-chat';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private selectedChat = new BehaviorSubject<FullChat | null>(null);

  selectedChat$ = this.selectedChat.asObservable()

  setConversation(chat: FullChat) {
    this.selectedChat.next(chat)
  }
}
