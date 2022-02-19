<template lang="pug" src="./avatar.pug" />

<script>
export default {
  name: "avatar",

  props: {
    size: {
      type: Number,
      default: 44,
    },
    src: {
      type: String,
      required: true,
    },
    withBorder: {
      type: Boolean,
      default: false,
    },
    withSmallBorder: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style src="./_avatar.scss" lang="scss" scoped />
