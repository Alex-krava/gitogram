<template lang="pug">
button.button(:class="{button__pressed: pressed || loading, button__paddings: loading}")
  span.button__text(v-if="!loading" :class="{'button__invisible-text': loading || pressed}")
    slot
  span.button__hover-text(v-if="pressed && !loading") {{hoverText}}

  .button__loading(v-if="loading")
    icon(name="loading")
</template>

<script>
import Icon from "@/components/icons/icon.vue";

export default {
  name: "c-button",

  components: {
    Icon,
  },

  props: {
    hoverText: {
      type: String,
    },
    pressed: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
  },
};
</script>

<style src="./_button.scss" lang="scss" scoped />
