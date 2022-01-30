<template lang="pug" src="./avatars-list.pug" />

<script>
import { mapGetters } from "vuex";
import Avatar from "@/components/avatar/avatar";

export default {
  name: "avatarsList",

  components: {
    Avatar,
  },

  computed: {
    ...mapGetters({
      posts: "trendings/posts",
    }),
  },
};
</script>

<style src="./_avatars-list.scss" lang="scss" scoped />
