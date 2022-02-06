<template lang="pug">
.slider-card(:class="{'slider-card_active': active}")
  .slider-card__header
    .slider-card__progress
      c-progress(@onFinish="handlingFinishProgress" :active="active")
    .slider-card__user
      user(:src="userAvatar" :name="repoName" :size="32")
  .slider-card__content
    template(v-if="content")
      slot
    template(v-else)
      placeholder(:paragraphs="2")
  .slider-card__footer
    c-button.slider-card__button(@click="handlingClickFollow" hoverText="Unfollow" :pressed="buttonStatus.status" :loading="buttonStatus.loading") Follow

  template(v-if="active")
    button.slider-card__nav-button(v-if="!firstCard" @click="previousClick")
      icon(name="arrowLeft" width="18")
    button.slider-card__nav-button.slider-card__nav-button_right(v-if="!lastCard" @click="nextClick")
      icon(name="arrowLeft" width="18")
</template>

<script>
import User from "@/components/user/user";
import CProgress from "@/components/progress/progress";
import CButton from "@/components/button/button";
import Icon from "@/components/icons/icon";
import Placeholder from "@/components/placeholder/placeholder";

export default {
  name: "Slider",

  components: {
    Placeholder,
    Icon,
    User,
    CProgress,
    CButton,
  },
  emits: ["nextClick", "previousClick", "finishProgress", "onClick"],

  props: {
    id: {
      type: Number,
      required: true,
    },
    userAvatar: {
      type: String,
      required: true,
    },
    repoName: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    content: {
      type: Boolean,
      default: false,
    },
    firstCard: {
      type: Boolean,
      default: false,
    },
    lastCard: {
      type: Boolean,
      default: false,
    },
    buttonStatus: {
      type: Object,
      default: () => {
        return {
          status: false,
          loading: false,
          error: "",
        };
      },
    },
  },

  methods: {
    handlingFinishProgress() {
      if (this.active) {
        this.$emit("finishProgress");
      }
    },
    nextClick() {
      this.$emit("nextClick");
    },
    previousClick() {
      this.$emit("previousClick");
    },
    handlingClickFollow() {
      this.$emit("onClick", this.id);
    },
  },
};
</script>

<style src="./_slider-card.scss" lang="scss" scoped />
