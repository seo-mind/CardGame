<template>
  <div class="game-level-wrapper">
    <h1 class="game-page-title">Game Level</h1>
    <ul class="game-level-nav">
      <li class="game-level-nav-item" v-for="(num, idx) in 12" :key="idx">
        <router-link
          :to="{ name: $route.params.gameName, params: { level: num } }"
          >Level {{ num }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.game-level-nav {
  flex-wrap: wrap;
  position: relative;
}
.game-level-nav .game-level-nav-item {
  margin: 10px;
}
.game-level-nav .game-level-nav-item a {
  font-size: 1.3rem;
}
.game-level-nav .game-level-nav-item a:hover {
  font-size: 1.4rem;
}
</style>
