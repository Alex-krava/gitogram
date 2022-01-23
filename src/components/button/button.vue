<template lang="pug">
button.button
  span.button__text(:class="{'button__text_hover': hoverText}")
    slot
  span.button__hover-text(v-if="hoverText") {{hoverText}}
</template>

<script>
export default {
  name: "c-button",

  props: {
    hoverText: {
      type: String,
    },
  },
};
</script>

<style src="./_button.scss" lang="scss" scoped />
