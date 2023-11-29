'use strict';

console.log('sto funzionando');

const { createApp } = Vue;

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')