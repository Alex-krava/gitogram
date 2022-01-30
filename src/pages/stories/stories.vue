<template lang="pug">
.stories-page
  .g-container
    .stories-page__header
      logo(white)
      router-link(to="/").stories-page__link
        icon(name="close" width="22")

  slider
</template>

<script>
import Logo from "@/components/logo/logo.vue";
import Icon from "@/components/icons/icon.vue";
import Slider from "@/components/slider/slider.vue";

export default {
  name: "Stories",
  components: {
    Logo,
    Icon,
    Slider,
  },
};
</script>

<style lang="scss" src="./_stories.scss" scoped />
