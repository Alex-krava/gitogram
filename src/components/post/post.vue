<template lang="pug" src="./post.pug" />

<script>
import User from "@/components/user/user";
import Toggler from "@/components/toggler/toggler";

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
    handlingChangeToggler(value) {
      this.visibleIssues = value;
    },
  },
};
</script>

<style src="./_post.scss" lang="scss" scoped />
