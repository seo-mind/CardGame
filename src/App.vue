<template>
  <div v-if="$route.name != 'GameHome'" class="btn-wrapper">
    <button class="btn btn-small btn-primary" @click="$router.go(-1)">
      Back
    </button>
  </div>
  <div class="user-info-wrapper">
    <span>현재 스코어: {{ score }}</span>
    <span>현재 레벨: {{ level }}</span>
  </div>
  <router-view></router-view>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters({
      score: "getScore",
      level: "getLevel",
    }),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn-wrapper {
  position: fixed;
  left: 20px;
  top: 20px;
}

.user-info-wrapper {
  position: fixed;
  right: 20px;
  top: 20px;
}

.user-info-wrapper span {
  display: inline-block;
  font-size: 1.2rem;
  margin-right: 3px;
}

.game-page-title {
  margin: 20px 0px;
  font-weight: bold;
  font-size: 2rem;
}

.game-home-wrapper,
.game-list-wrapper,
.game-level-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
}

.game-nav,
.game-list-nav,
.game-level-nav {
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-nav .game-nav-item,
.game-list-nav .game-list-nav-item,
.game-level-nav .game-level-nav-item {
  width: 30%;
  height: 150px;
  position: relative;
  background-color: #0d47a1;
  border-radius: 10px;
}

.game-nav .game-nav-item:hover,
.game-list-nav .game-list-nav-item:hover,
.game-level-nav .game-level-nav-item:hover {
  cursor: pointer;
}

.game-nav .game-nav-item a,
.game-list-nav .game-list-nav-item a,
.game-level-nav .game-level-nav-item a {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.game-nav .game-nav-item a:hover,
.game-list-nav .game-list-nav-item a:hover,
.game-level-nav .game-level-nav-item a:hover {
  font-size: 1.6rem;
  text-decoration: underline;
}
</style>
