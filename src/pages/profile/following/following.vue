<template lang="pug">
.following-page(v-if="!followersIsLoading" )
  stats-title.following-page__title(title="Following" :count="followers.length")
  ul.following-page__list
    li.following-page__item(v-for="item in followers" :id="item.id")
      following-item(:name="item.name" :avatar="item.avatar_url" :login="item.login" :id="item.id")
</template>

<script>
import StatsTitle from "@/components/stats-title/stats-title";
import FollowingItem from "@/components/following-item/following-item";
import useUserFollowers from "@/components/composables/useUserFollowers";

export default {
  name: "Following",
  components: {
    StatsTitle,
    FollowingItem,
  },

  setup() {
    const { followers, followersIsLoading } = useUserFollowers();

    return {
      followers,
      followersIsLoading,
    };
  },
};
</script>

<style src="./_following.scss" lang="scss" scoped />
