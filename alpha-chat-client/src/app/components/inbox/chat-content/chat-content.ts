import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message.model';
import { Conversation } from '../models/conversation.model';
import { DateTime } from '../../../services/utils/date-time';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../../services/chat';
import { FullChat } from '../models/temp-full-chat';

@Component({
  selector: 'app-chat-content',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './chat-content.html',
  styleUrl: './chat-content.css',
})
export class ChatContent implements OnInit {
  now: string = ""
  inputMessage: string = ""
  activeChat: FullChat | null = null

  constructor(
    private dateService: DateTime,
    private chatService: ChatService
  ) {
    this.now = this.dateService.getDate()
  }

  ngOnInit(): void {
    this.chatService.selectedChat$.subscribe(chat => {
      this.activeChat = chat
      this.inputMessage = ''
    })
  }

  addNewMessage() {
    const item = this.activeChat?.messages[this.activeChat.messages.length - 1]
    if (item) {
      const newId = item.id + 1

      const message: Message = {
        id: newId,
        text: this.inputMessage,
        time: this.now,
        send: true
      };

      this.inputMessage = ''
      this.activeChat?.messages.push(message)

      setTimeout(() => {
        const container = document.querySelector('.messages');
        if (container) {
          container.scrollTo({
            top: container.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, 50)
    }
  }
}
