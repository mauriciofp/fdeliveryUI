import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 ionViewWillEnter(){

  //  Lo hace el scroll mas lento

  // eslint-disable-next-line prefer-const
   let chatSection = document.getElementById('chat');
   chatSection.scrollTop = chatSection.scrollHeight;
 }
}
