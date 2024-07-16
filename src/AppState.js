import { reactive } from 'vue'
import { Upgrades } from "./models/Upgrades.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  gold: 0,
  /**@type {Upgrades []} */
  clickUpgrades: [
    new Upgrades({
      name: 'Cool Hat',
      price: 25,
      quantity: 0,
      multiplier: 5
    }),
    new Upgrades({
      name: 'Super Cool Hat',
      price: 100,
      quantity: 0,
      multiplier: 10
    })],
  autoUpgrades: [
    new Upgrades({
      name: 'Midas Touch',
      price: 1000,
      quantity: 0,
      multiplier: 50
    }),
    new Upgrades({
      name: 'Goddess of Gold',
      price: 100000,
      quantity: 0,
      multiplier: 500
    })]

})