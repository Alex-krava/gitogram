<template lang="pug" src="./main.pug" />

<script>
import Post from "@/components/post/post";
import Card from "@/components/card/card";
import Topline from "@/components/topline/topline";
import { getTrendings } from "../../api/rest/trendings";

export default {
  name: "Home",
  components: {
    Post,
    Card,
    Topline,
  },
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    try {
      const { data } = await getTrendings();
      this.posts = data.items;
    } catch (e) {
      console.log(new Error(e).message);
    }
  },
  methods: {
    dataForPost(post) {
      return {
        avatar: post.owner.avatar_url,
        username: post.owner.login,
        issues: [],
      };
    },
    dataForCard(post) {
      return {
        title: post.name,
        descriptionType: post.language,
        description: post.description,
        star: post.stargazers_count,
        fork: post.forks,
      };
    },
  },
};
</script>

<style src="./main.scss" lang="scss" scoped />
