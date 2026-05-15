import { Component } from '@angular/core';
import { ChatService } from '../../../services/chat';
import { FullChat } from '../models/temp-full-chat';

@Component({
  selector: 'app-conversations',
  imports: [],
  templateUrl: './conversations.html',
  styleUrl: './conversations.css',
})
export class Conversations {

  constructor(private chatService: ChatService) { }

  onSelect(chat: FullChat) {
    this.chatService.setConversation(chat)
  }

  subheaders = [
    { id: 'All' },
    { id: 'Mine' },
    { id: 'Unread' },
  ]

  activeSubHeader = 'All'
  setActiveSubHeader(item: string) {
    this.activeSubHeader = item;
  }

  chats: FullChat[] = [
    {
      id: "1",
      avatar: "https://i.pravatar.cc/150?img=12",
      name: "Lucas Silva",
      lastMessage: "Ei! Preciso de ajuda com a renovação da minha assinatura.",
      lastUpdate: "14:32",
      tags: [
        { name: "VIP", color: "#92400e" },
        { name: "Suporte", color: "#1d4ed8" },
      ],
      messages: [
        { id: 1, text: 'Boa tarde, Lucas! Como posso ajudar um de nossos membros VIP hoje?', time: '14:20', send: true, received: true },
        { id: 2, text: 'Oi! Minha assinatura renova amanhã e preciso trocar o cartão cadastrado.', time: '14:22', send: false },
        { id: 3, text: 'Sem problemas. Vou te enviar agora o link do portal de faturamento para a atualização.', time: '14:25', send: true, received: true },
        { id: 4, text: 'Ei! Preciso de ajuda com a renovação da minha assinatura.', time: '14:32', send: false },
      ]
    },

    {
      id: "2",
      avatar: "https://i.pravatar.cc/150?img=32",
      name: "Amanda Costa",
      lastMessage: "O pagamento já foi confirmado.",
      lastUpdate: "13:18",
      tags: [
        { name: "Financeiro", color: "#166534" },
      ],
      messages: [
        { id: 1, text: 'Olá, Amanda. Verificamos uma pequena pendência no processamento do seu último lote.', time: '12:00', send: true, received: true },
        { id: 2, text: 'Vou verificar com o meu banco o que aconteceu agora mesmo.', time: '12:05', send: false },
        { id: 3, text: 'Certo, fico no aguardo do comprovante para dar baixa aqui.', time: '12:10', send: true, received: true },
        { id: 4, text: 'O pagamento já foi confirmado.', time: '13:18', send: false },
      ]
    },

    {
      id: "3",
      avatar: "https://i.pravatar.cc/150?img=25",
      name: "Marina Alves",
      lastMessage: "Você pode me enviar o contrato atualizado?",
      lastUpdate: "12:05",
      tags: [
        { name: "Vendas", color: "#7c3aed" },
        { name: "Prioridade", color: "#dc2626" },
      ],
      messages: [
        { id: 1, text: 'Carlos, os termos da nova proposta foram aprovados pela diretoria.', time: '11:45', send: true, received: true },
        { id: 2, text: 'Excelente notícia! Vamos avançar com a assinatura então.', time: '11:50', send: false },
        { id: 3, text: 'Perfeito. Vou gerar o documento final agora.', time: '11:55', send: true, received: true },
        { id: 4, text: 'Você pode me enviar o contrato atualizado?', time: '12:05', send: false },
      ]
    },

    {
      id: "4",
      avatar: "https://i.pravatar.cc/150?img=45",
      name: "Fernanda Rocha",
      lastMessage: "Obrigada! Tudo está funcionando agora.",
      lastUpdate: "Ontem",
      tags: [
        { name: "Resolvido", color: "#15803d" },
      ],
      messages: [
        { id: 1, text: 'Fernanda, aplicamos a correção na sua conta conforme solicitado.', time: '16:00', send: true, received: true },
        { id: 2, text: 'Vou testar as funcionalidades aqui no meu painel.', time: '16:05', send: false },
        { id: 3, text: 'Conseguiu confirmar se o erro de integração parou?', time: '16:10', send: true, received: true },
        { id: 4, text: 'Obrigada! Tudo está funcionando agora.', time: '17:30', send: false },
      ]
    },

    {
      id: "5",
      avatar: "https://i.pravatar.cc/150?img=51",
      name: "João Pedro",
      lastMessage: "Eu gostaria de saber mais sobre os seus planos.",
      lastUpdate: "Ontem",
      tags: [
        { name: "Lead", color: "#ea580c" },
        { name: "WhatsApp", color: "#16a34a" },
      ],
      messages: [
        { id: 1, text: 'Olá, João! Vi que você se interessou pelo nosso anúncio de automação.', time: '10:00', send: true, received: true },
        { id: 2, text: 'Sim, estou buscando uma solução para escalar meu atendimento.', time: '10:15', send: false },
        { id: 3, text: 'Com certeza podemos ajudar. Temos modelos específicos para o seu nicho.', time: '10:20', send: true, received: true },
        { id: 4, text: 'Eu gostaria de saber mais sobre os seus planos.', time: '10:45', send: false },
      ]
    },

    {
      id: "6",
      avatar: "https://i.pravatar.cc/150?img=60",
      name: "Carlos Mendes",
      lastMessage: "O problema ainda persiste após a atualização.",
      lastUpdate: "09:41",
      tags: [
        { name: "Bug", color: "#dc2626" },
        { name: "Técnico", color: "#2563eb" },
      ],
      messages: [
        { id: 1, text: 'Marina, a equipe de engenharia liberou a versão 2.1 com as correções.', time: '09:00', send: true, received: true },
        { id: 2, text: 'Acabei de atualizar o sistema aqui.', time: '09:10', send: false },
        { id: 3, text: 'Por favor, tente realizar o upload dos arquivos novamente.', time: '09:15', send: true, received: true },
        { id: 4, text: 'O problema ainda persiste após a atualização.', time: '09:41', send: false },
      ]
    },

    {
      id: "7",
      avatar: "https://i.pravatar.cc/150?img=14",
      name: "Ricardo Lima",
      lastMessage: "Perfeito, ficarei no aguardo do seu feedback.",
      lastUpdate: "08:22",
      tags: [
        { name: "Follow-up", color: "#ca8a04" },
      ],
      messages: [
        { id: 1, text: 'Ricardo, sua solicitação foi encaminhada para a nossa análise técnica interna.', time: '08:00', send: true, received: true },
        { id: 2, text: 'Quanto tempo costuma levar esse processo de revisão?', time: '08:05', send: false },
        { id: 3, text: 'Geralmente respondemos em até 2 horas úteis.', time: '08:10', send: true, received: true },
        { id: 4, text: "Perfeito, ficarei no aguardo do seu feedback.", time: '08:22', send: false },
      ]
    }
  ]
}
