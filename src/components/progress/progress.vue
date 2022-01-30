<template lang="pug">
.progress(:class="{'progress_active': active}")
  .progress__line(ref="indicator")
</template>

<script>
export default {
  name: "c-progress",

  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["onFinish"],

  mounted() {
    this.$refs.indicator.addEventListener("transitionend", this.handlingFinish);
  },

  beforeUnmount() {
    this.$refs.indicator.removeEventListener(
      "transitionend",
      this.handlingFinish
    );
  },

  methods: {
    handlingFinish() {
      this.$emit("onFinish");
    },
  },
};
</script>

<style src="./_progress.scss" lang="scss" scoped />
