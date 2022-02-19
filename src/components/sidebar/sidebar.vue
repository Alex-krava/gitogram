<template lang="pug">
.sidebar.g-container
  .sidebar__container
    .sidebar__left
      .sidebar__info
        h1.sidebar__title My profile
        info
    .sidebar__content
      slot
</template>

<script>
import Avatar from "@/components/avatar/avatar.vue";
import Info from "@/components/info/info.vue";

export default {
  name: "Sidebar",
  components: {
    Avatar,
    Info,
  },
};
</script>

<style src="./_sidebar.scss" lang="scss" scoped />
