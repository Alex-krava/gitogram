<template lang="pug">
main-page
  template(#header)
    x-header
  template(#avatars)
    avatars-list
</template>

<script>
import MainPage from "@/pages/main/main.vue";
import XHeader from "@/components/header/header.vue";
import AvatarsList from "@/components/avatars-list/avatars-list.vue";

export default {
  components: {
    MainPage,
    XHeader,
    AvatarsList,
  },
};
</script>

<style lang="scss" src="@/assets/scss/global.scss"></style>
