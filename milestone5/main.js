'use strict';

const { createApp } = Vue;

createApp({
data() {
    return {
    contacts: [
            {
                name: 'Michele',
                avatar: '/img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '/img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '/img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '/img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '/img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '/img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '/img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '/img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
    ],

    currentContact: null,
    newMessage: '',
    keySearch: '',
    filteredContacts: [],
    clickedMessage: null,
        }
},
methods: {
    setCurrentContact(index) {
        this.currentContact = index;
    },

    getLastMessage(contact) {
        return contact.messages.length ? contact.messages[contact.messages.length - 1] : { message: "Non ci sono messaggi con questo contatto." };
    },

    sendMessage() {
        const trimmedMessage = this.newMessage.trim();

        if (trimmedMessage !== '') {
            this.currentContact.messages.push({
                date: '10/10/23 12:00:00',
                message: trimmedMessage,
                status: 'sent',
            });

            this.newMessage = '';

            setTimeout(() => {
                this.currentContact.messages.push({
                    date: '10/10/23 12:00:02',
                    message: 'Ok',
                    status: 'received',
                });
            }, 1_000);
        }
    },

    searchContacts() {
        if (this.keySearch.trim() !== '') {
            this.filteredContacts = this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(this.keySearch.toLowerCase())
            );
        } else {
            this.filteredContacts = this.contacts;
        }
    },

    dropdown(message) {
        if (this.clickedMessage === message) {
            this.clickedMessage = null;
        } else {
            this.clickedMessage = message;
        }
    },
    
    infoMessage() {
        console.log("Message info");
    },

    deleteMessage() {
        console.log("Delete message");
        if (this.clickedMessage) {
            const index = this.currentContact.messages.indexOf(this.clickedMessage);
            if (index !== -1) {
                this.currentContact.messages.splice(index, 1);
    
                setTimeout(() => {
                    this.clickedMessage = null;
                }, 100);
            }
        }
    },
      
    
    
},
created() {
    if (this.contacts.length > 0) {
        this.setCurrentContact(this.contacts[0]);
        this.filteredContacts = this.contacts;
    }
},
}).mount('#app');