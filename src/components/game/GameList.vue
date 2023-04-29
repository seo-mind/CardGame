<template>
  <div class="game-list-wrapper">
    <h1 class="game-page-title">Games</h1>
    <ul class="game-list-nav">
      <li class="game-list-nav-item">
        <router-link :to="{ name: 'GameLevel', params: { gameName: 'Color' } }"
          >색깔 맞추기</router-link
        >
      </li>
      <li class="game-list-nav-item">
        <router-link :to="{ name: 'GameLevel', params: { gameName: 'Order' } }"
          >순서 맞추기</router-link
        >
      </li>
      <li class="game-list-nav-item">
        <router-link :to="{ name: 'GameLevel', params: { gameName: 'Number' } }"
          >숫자 맞추기</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.game-list-nav {
  flex-direction: column;
}
.game-list-nav .game-list-nav-item {
  margin: 10px;
}
</style>
