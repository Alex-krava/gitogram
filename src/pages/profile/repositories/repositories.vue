<template lang="pug">
.repositories-pages(v-if="!reposIsLoading")
  stats-title.repositories-pages__title(title="Repositories" :count="repos.length")
  ul.repositories-pages__list
    li.repositories-pages__item(v-for="item in repos" :id="item.id")
      card(:post="post(item)")
</template>

<script>
import StatsTitle from "@/components/stats-title/stats-title";
import Card from "@/components/card/card";
import useUserRepos from "@/components/composables/useUserRepos";

export default {
  name: "Repositories",
  components: {
    StatsTitle,
    Card,
  },
  setup() {
    const { repos, reposIsLoading } = useUserRepos();

    return {
      repos,
      reposIsLoading,
    };
  },

  methods: {
    post(item) {
      return {
        title: item.name,
        descriptionType: item.language,
        description: item.description,
        star: item.stargazers_count,
        fork: item.forks,
      };
    },
  },
};
</script>

<style src="./_repositories.scss" lang="scss" scoped />
