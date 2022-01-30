<template lang="pug">
.slider
  .slider__container(:style="styleContainer")
    ul.slider__list
      li.slider__item(v-for="(post, index) in posts" :key="post.id" :class="{'slider__item_active': index === activeIndex}")
        card(:userAvatar="post.avatar"
          :repoName="post.title"
          :active="index === activeIndex"
          @nextClick="handlingNextClick"
          @previousClick="handlingPreviousClick"
          @finishProgress="handlingNextClick"
          :firstCard="index === 0"
          :lastCard="index === posts.length - 1"
          :content="!!post.content"
          )
          div(v-html="post.content")
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "@/components/slider-card/slider-card.vue";

export default {
  name: "Slider",
  components: {
    Card,
  },

  data() {
    return {
      activeIndex: Number.parseInt(this.$route?.query?.active) || 0,
    };
  },

  computed: {
    ...mapGetters({
      posts: "trendings/posts",
    }),
    styleContainer() {
      return {
        transform: `translateX(-${this.activeIndex * 375}px)`,
      };
    },
  },

  async created() {
    await this.fetchTrendings();
    this.fetchReadme();

    if (this.$route.query.active) {
      this.activeIndex = Number.parseInt(this.$route.query.active);
    }
  },

  methods: {
    ...mapActions({
      fetchTrendings: "trendings/fetchTrendings",
      fetchReadmeAction: "trendings/fetchReadme",
    }),

    async fetchReadme() {
      const {id, username, title} = this.posts[this.activeIndex];
      this.fetchReadmeAction({id, owner: username, repo: title});
    },

    handlingNextClick() {
      if (this.activeIndex < this.posts.length - 1) {
        this.activeIndex += 1;
        this.fetchReadme();
      }
    },

    handlingPreviousClick() {
      if (this.activeIndex !== 0) {
        this.activeIndex -= 1;
        this.fetchReadme();
      }
    },
  },
};
</script>

<style src="./_slider.scss" lang="scss" scoped />
