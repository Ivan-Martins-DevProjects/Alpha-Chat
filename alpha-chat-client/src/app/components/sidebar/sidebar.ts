import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input()
  open = false;

  @Output() closeSideBar = new EventEmitter<void>();
  closeBar() {
    this.closeSideBar.emit()
  }

  activeItem = 'Inbox';

  BodyItems = [
    {
      id: 'Inbox',
      icon: 'fa fa-envelope',
      elements: [
        { id: 'Messages', icon: 'stacked_email', type: 'google' },
        { id: 'Mention', icon: 'alternate_email', type: 'google' },
        { id: 'Unread', icon: 'mark_chat_unread', type: 'google' }
      ]
    },
    {
      id: 'Contacts',
      icon: 'fa fa-address-book',
      elements: [
        { id: "All", icon: 'contacts', type: 'google' },
        { id: "Favorite", icon: 'favorite', type: 'google' },
        { id: "Wallet", icon: 'wallet', type: 'google' }
      ]
    },
    {
      id: 'Teams',
      icon: 'fas fa-users',
      elements: [
        { id: "Comercial", icon: 'groups_2', type: 'google' },
        { id: "Suporte", icon: 'groups_2', type: 'google' },
        { id: "Financeiro", icon: 'groups_2', type: 'google' },
        { id: "Diretoria", icon: 'groups_2', type: 'google' }
      ]
    },
    {
      id: 'Labels',
      icon: 'fa fa-tags',
      elements: [
        { id: "Lead", icon: 'Label', type: 'google' },
        { id: "Cliente", icon: 'Label', type: 'google' },
        { id: "Fornecedor", icon: 'Label', type: 'google' },
      ]
    },
  ]

  FooterItems = [
    { id: 'Settings', icon: 'fas fa-gears' },
    { id: 'Logout', icon: 'fa fa-sign-out' },
  ]

  setActive(item: string) {
    if (this.activeItem === item) {
      this.activeItem = "none"
      this.subItemActive = "none"
      return
    }

    this.activeItem = item;
    this.subItemActive = "none"
  }

  subItemActive = ''
  setSubActive(item: string) {
    if (this.subItemActive === item) {
      this.subItemActive = "none"
      return
    }

    this.subItemActive = item;
    this.closeBar()
  }
}
