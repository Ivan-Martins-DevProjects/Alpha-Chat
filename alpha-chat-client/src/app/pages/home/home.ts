import { Component } from '@angular/core';
import { Conversations } from '../../components/inbox/conversations/conversations';
import { ChatContent } from '../../components/inbox/chat-content/chat-content';

@Component({
  selector: 'app-home',

  standalone: true,

  imports: [
    Conversations,
    ChatContent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
}

