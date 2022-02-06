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
      likes: "user/likes",
    }),
  },
  async created() {
    await this.fetchTrendings();
    await this.fetchUserLikes();
  },
  methods: {
    ...mapActions({
      fetchTrendings: "trendings/fetchTrendings",
      fetchUserLikes: "user/fetchUserLikes",
    }),
  },
};
</script>

<style src="./main.scss" lang="scss" scoped />
