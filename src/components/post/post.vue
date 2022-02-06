<template lang="pug" src="./post.pug" />

<script>
import User from "@/components/user/user";
import Toggler from "@/components/toggler/toggler";
import { mapActions } from "vuex";

export default {
  name: "Post",

  components: {
    User,
    Toggler,
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
    async handlingChangeToggler(value) {
      this.visibleIssues = value;

      if (value && !this.post.issues.length) {
        await this.fetchIssues({
          owner: this.post.username,
          repo: this.post.title,
          id: this.post.id,
        });
      }
    },
  },
};
</script>

<style src="./_post.scss" lang="scss" scoped />
