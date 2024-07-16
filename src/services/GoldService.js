import { AppState } from "../AppState.js"

class GoldService {
  buyItem(itemName) {
    let upgrades = AppState.clickUpgrades
    let foundUpgrade = upgrades.find((upgrade) => upgrade.name == itemName)
    if (foundUpgrade.price <= AppState.gold) {
      foundUpgrade.quantity++
      AppState.gold -= foundUpgrade.price
    }
  }
  buyItems(itemName) {
    let upgrades = AppState.autoUpgrades
    let foundUpgrade = upgrades.find((upgrade) => upgrade.name == itemName)
    if (foundUpgrade.price <= AppState.gold) {
      foundUpgrade.quantity++
      AppState.gold -= foundUpgrade.price
    }
    else return
  }
  addGold() {
    let totalGold = 1
    AppState.clickUpgrades.forEach(upgrade => totalGold += (upgrade.quantity * upgrade.multiplier))
    AppState.gold += totalGold
    return AppState.gold
  }
  autoGold() {
    let totalGold = 0
    AppState.autoUpgrades.forEach(upgrade => totalGold += (upgrade.multiplier * upgrade.quantity))
    AppState.gold += totalGold
    return AppState.gold
  }
}
export const goldService = new GoldService()