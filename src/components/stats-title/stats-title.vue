<template lang="pug">
.stats-title
  .stats-title__title {{title}}
  .stats-title__count {{count}}
</template>

<script>
export default {
  name: "StatsTitle",
  props: {
    title: {
      type: String,
    },
    count: {
      type: Number,
    },
  },
};
</script>

<style src="./_stats-title.scss" lang="scss" scoped />
