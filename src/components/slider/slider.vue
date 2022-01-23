<template lang="pug">
.slider
  .slider__header
    .slider__progress
      c-progress(@onFinish="handlingFinishProgress")
    .slider__user
      user(:src="userAvatar" :name="repoName" :size="32")
  .slider__content
    slot
  .slider__footer
    c-button.slider__button Follow
</template>

<script>
import User from "@/components/user/user";
import CProgress from "@/components/progress/progress";
import CButton from "@/components/button/button";
export default {
  name: "Slider",

  components: {
    User,
    CProgress,
    CButton,
  },

  props: {
    userAvatar: {
      type: String,
      required: true,
    },
    repoName: {
      type: String,
      required: true,
    },
  },

  methods: {
    handlingFinishProgress() {},
  },
};
</script>

<style src="./_slider.scss" lang="scss" scoped />
