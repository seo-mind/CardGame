<template>
  <div
    @click="answerCheck"
    class="game-card"
    :class="{ active: targetCard }"
  ></div>
</template>

<script>
export default {
  beforeMount() {
    if (this.target == 1) {
      this.targetCard = true;
      setTimeout(() => {
        this.targetCard = false;
      }, 1000 / this.level);
    }
  },
  props: {
    target: Number,
    cardNum: Number,
    level: Number,
  },
  data() {
    return {
      targetCard: false,
    };
  },
  methods: {
    answerCheck: function () {
      if (this.target === 1) {
        this.targetCard = true;
      }
      this.$emit("answerCheck", this.cardNum);
    },
  },
};
</script>

<style></style>
