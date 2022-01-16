<template src="./card.pug" lang="pug" />

<script>
import Stats from "@/components/stats/stats";
export default {
  name: "Card",

  components: {
    Stats,
  },

  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style src="./_card.scss" lang="scss" scoped />
