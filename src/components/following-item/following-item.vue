<template lang="pug">
.following-item
  .following-item__avatar
    avatar(:src="avatar" :size="72" withSmallBorder)
  .following-item__info
    .following-item__login {{login}}
    .following-item__name {{name}}
  .following-item__buttons
    c-button.following-item__button(@click="followRepo(id)") following
</template>

<script>
import FollowingItem from "@/components/following-item/following-item";
import Avatar from "@/components/avatar/avatar";
import CButton from "@/components/button/button";
import useFollow from "@/components/composables/useFollow";

export default {
  name: "FollowingItem",
  components: {
    FollowingItem,
    Avatar,
    CButton,
  },
  props: {
    avatar: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
    },
    login: {
      type: String,
    },
    isFollow: {
      type: Boolean,
    },
  },
  setup() {
    const { followRepo } = useFollow();

    return {
      followRepo,
    };
  },
};
</script>

<style src="./_following-item.scss" lang="scss" scoped />
