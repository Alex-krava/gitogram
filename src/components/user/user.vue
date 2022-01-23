<template src="./user.pug" lang="pug" />

<script>
import Avatar from "@/components/avatar/avatar";
export default {
  name: "User",
  components: {
    Avatar,
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    imgSize: {
      type: Number,
      default: 44,
    },
  },
};
</script>

<style src="./_user.scss" lang="scss" scoped />
