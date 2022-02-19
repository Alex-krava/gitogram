<template lang="pug" src="./post.pug" />

<script>
import User from "@/components/user/user";
import Issues from "@/components/issues/issues";
import { mapActions } from "vuex";

export default {
  name: "Post",

  components: {
    User,
    Issues,
  },

  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      visibleIssues: false,
    };
  },

  methods: {
    ...mapActions({
      fetchIssues: "user/fetchIssues",
    }),
    async handlingChangeToggler() {
      await this.fetchIssues({
        owner: this.post.username,
        repo: this.post.title,
        id: this.post.id,
      });
    },
  },
};
</script>

<style src="./_post.scss" lang="scss" scoped />
