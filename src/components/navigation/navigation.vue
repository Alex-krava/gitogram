<template lang="pug" src="./navigation.pug" />

<script>
import Icon from "@/components/icons/icon.vue";
import Avatar from "@/components/avatar/avatar.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Navigation",

  components: {
    Icon,
    Avatar,
  },

  computed: {
    ...mapGetters({
      avatarSrc: "user/avatarSrc",
    }),
  },

  methods: {
    ...mapActions({
      logout: "user/logout",
    }),
    handlingClickLogout() {
      this.logout();
      this.$router.replace({ name: "Auth" });
    },
  },
};
</script>

<style src="./_navigation.scss" lang="scss" scoped />
