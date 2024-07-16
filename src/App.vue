<!-- JS -->
<script setup>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState.js'
import { goldService } from "./services/GoldService.js";
const gold = computed(() => AppState.gold)
const clickUpgrades = computed(() => AppState.clickUpgrades)
const autoUpgrades = computed(() => AppState.autoUpgrades)
function addGold() {
  goldService.addGold()
}
function buyItem(itemName) {
  goldService.buyItem(itemName)
}
function buyItems(itemName) {
  goldService.buyItems(itemName)
}
onMounted(()=> {
  setInterval(goldService.autoGold, 2000)
})

</script>


<!-- HTML -->
<template>
  <div class="container d-flex justify-content-center">
    <div class="row">
      <div class="col-12 my-5 text-center">
        <img @click="addGold()" src="https://image02.seesaawiki.jp/c/s/clickerheroes/813a4b17a52610a0.png"
          alt="Clicker Thing">
        <h1>{{ gold }} Gold</h1>
      </div>
    </div>
  </div>
  <div class="container d-flex justify-content-center">
    <div class="row">
      <div class="col-12">
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom">Upgrades</button>

        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Choose Your Upgrades</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body small">

            <div v-for="upgrade in clickUpgrades" :key="upgrade.name" class="col-12 text-center">
              <div>
                <h2>{{ upgrade.name }} {{ upgrade.quantity }} <span> <button @click="buyItem(`${upgrade.name}`)"
                      class="btn btn-info ">{{
                        upgrade.price }} Gold</button></span>
                </h2>
              </div>
            </div>
            <div v-for="upgrade in autoUpgrades" :key="upgrade.name" class="col-12 text-center">
              <div>
                <h2>{{ upgrade.name }} {{ upgrade.quantity }} <span> <button @click="buyItems(`${upgrade.name}`)" class="btn btn-info ">{{
                  upgrade.price }} Gold</button></span>
                </h2>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<!-- styles -->
<style lang="scss">
@import "./assets/scss/main.scss";
</style>