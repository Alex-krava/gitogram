<template lang="pug">
.info
  .info__avatar
    avatar(:src="user.avatar_url" :size="90")
  .info__content
    .info__name {{user.login}}
    .info__stats
      .info__reports
        span.info__bold {{user.public_repos}}
        span.info__text reposts
      .info__watchers
        span.info__bold {{user.following}}
        router-link.info__text.info__link(to="/profile/following") watchers
    .info__fullname {{user.name}}
</template>

<script>
import Avatar from "@/components/avatar/avatar.vue";
import useUser from "@/components/composables/useUser.js";

export default {
  name: "Info",
  components: {
    Avatar,
  },

  setup() {
    const { user } = useUser();

    return {
      user,
    };
  },
};
</script>

<style src="./_info.scss" lang="scss" scoped />
