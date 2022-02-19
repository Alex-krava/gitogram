<template lang="pug">
.profile-page
  topline.profile-page__topline
    template(#header)
      c-header
  .profile-page__content
    sidebar
      .profile-page__container
        router-view
</template>

<script>
import CHeader from "@/components/header/header.vue";
import Topline from "@/components/topline/topline";
import Sidebar from "@/components/sidebar/sidebar";

export default {
  name: "Profile",
  components: {
    CHeader,
    Topline,
    Sidebar,
  },
};
</script>

<style src="./_profile.scss" lang="scss" scoped />
