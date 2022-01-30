<template lang="pug" src="./main.pug" />

<script>
import { mapActions, mapGetters } from "vuex";
import XHeader from "@/components/header/header.vue";
import AvatarsList from "@/components/avatars-list/avatars-list.vue";
import Post from "@/components/post/post";
import Card from "@/components/card/card";
import Topline from "@/components/topline/topline";

export default {
  name: "Home",
  components: {
    XHeader,
    AvatarsList,
    Post,
    Card,
    Topline,
  },
  computed: {
    ...mapGetters({
      posts: "trendings/posts",
    }),
  },
  async created() {
    await this.fetchTrendings();
  },
  methods: {
    ...mapActions({ fetchTrendings: "trendings/fetchTrendings" }),
  },
};
</script>

<style src="./main.scss" lang="scss" scoped />
