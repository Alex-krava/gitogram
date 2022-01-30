<template lang="pug">
.placeholder
  .placeholder__main
  .placeholder__paragraph(v-for="(items, index) in paragraphs" :key="index")
    .placeholder__text
    .placeholder__text
    .placeholder__text
</template>

<script>
export default {
  name: "Placeholder",
  props: {
    paragraphs: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="scss" src="./_placeholder.scss" scoped />
