<template src="./stats.pug" lang="pug" />

<script>
import Icon from "@/components/icons/icon";

export default {
  name: "Stats",

  components: {
    Icon,
  },

  props: {
    star: {
      type: String,
      required: true,
    },
    fork: {
      type: String,
      required: true,
    },
  },
};
</script>

<style src="./_stats.scss" lang="scss" scoped />
