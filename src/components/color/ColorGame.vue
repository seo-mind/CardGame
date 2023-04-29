<template>
  <div class="game-wrapper">
    <h1 class="game-page-title">색깔 맞추기</h1>
    <div class="game-setting-wrapper">
      <div class="form-group">
        <label for="totCardNum" class="form-label">기억할 카드 개수</label>
        <select
          id="memCardNum"
          class="form-select"
          v-model.number="memCardNum"
          @change="stopGame()"
        >
          <option v-for="num in 10" :key="num">{{ num }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="totCardNum" class="form-label">총 카드 개수</label>
        <select
          id="totCardNum"
          class="form-select"
          v-model.number="totCardNum"
          @change="stopGame"
        >
          <option v-for="num in 4" :key="num">{{ num * 5 }}</option>
        </select>
      </div>
      <div class="form-group">
        <button class="btn btn-danger" v-if="!playing" @click="generateGame">
          PLAY
        </button>
        <button class="btn btn-primary" v-if="playing" @click="regenerateGame">
          REPLAY
        </button>
      </div>
    </div>
    <div class="card-group-wrapper" v-if="playing">
      <div
        class="card-wrapper"
        v-for="(value, index) in totalCards"
        :key="index"
      >
        <color-card
          @answerCheck="answerCheck"
          :cardNum="index + 1"
          :target="value"
          :level="level"
        ></color-card>
      </div>
    </div>
  </div>
</template>

<script>
import ColorCard from "./ColorCard.vue";
export default {
  beforeMount() {
    this.level = this.$route.params.level;
  },
  components: {
    ColorCard,
  },
  data() {
    return {
      // 게인 진행 여부
      playing: false,
      // 기억해야 할 카드 숫자
      memCardNum: 0,
      // 전체 카드 숫자
      totCardNum: 0,
      // 정답 카드 배열
      answerCards: [],
      // 전체 카드 배열
      totalCards: [],
      level: 0,
    };
  },
  computed: {},
  methods: {
    generateGame: function () {
      for (let i = 0; i < this.totCardNum; i++) {
        this.totalCards[i] = 0;
      }
      while (this.answerCards.length < this.memCardNum) {
        const target = Math.floor(Math.random() * this.totCardNum + 1);
        if (this.answerCards.indexOf(target) == -1) {
          this.answerCards.push(target);
          this.totalCards[target - 1] = 1;
        }
      }
      this.playing = true;
    },
    stopGame: function () {
      this.playing = false;
      this.answerCards = [];
      this.totalCards = [];
    },
    regenerateGame: function () {
      this.stopGame();
      this.generateGame();
    },
    answerCheck: function (cardNum) {
      const check = this.answerCards.indexOf(cardNum);
      if (check > -1) {
        this.answerCards.splice(check, 1);
        if (this.answerCards.length == 0) {
          alert("기억력이 좋으시네요!");
          this.stopGame();
        }
      } else {
        alert("틀렸습니다");
        this.stopGame();
      }
    },
  },
};
</script>

<style>
.game-wrapper {
  margin: 0 auto;
  padding: 30px;
}
.game-wrapper .game-setting-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #eee;
}
.game-wrapper .game-setting-wrapper .form-group {
  margin: 0px 20px;
}
.game-wrapper .card-group-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
}
.game-wrapper .card-group-wrapper .card-wrapper {
  width: 20%;
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.game-wrapper .card-group-wrapper .card-wrapper .game-card {
  height: 200px;
  width: 150px;
  background-color: gray;
}
.game-wrapper .card-group-wrapper .card-wrapper .game-card:hover {
  cursor: pointer;
}
.game-wrapper .card-group-wrapper .card-wrapper .game-card.active,
.game-wrapper .card-group-wrapper .card-wrapper .game-card.open {
  background-color: red;
}
</style>
