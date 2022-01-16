<template lang="pug" src="./header.pug" />

<script>
import Logo from "@/components/logo/logo.vue";
import Navigation from "@/components/navigation/navigation.vue";

export default {
  name: "x-header",

  components: {
    Logo,
    Navigation,
  },
};
</script>

<style src="./_header.scss" lang="scss" scoped />
