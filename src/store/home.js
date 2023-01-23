import { defineStore } from "pinia"

export const useHome = defineStore('tooltipStore', {
  id: 'counter',

  state: () => ({
    amount: 0,
    tooltipText: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem et fuga laboriosam.
    `
  }),

  getters: {
    amountClick () {
      return `Was clicked: ${this.amount}`
    }
  },

  actions: {
    increment () {
      this.amount++
    }
  }
})