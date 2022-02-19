<template lang="pug">
.issues
  .issues__toggler
    toggler(@onChange="handlingChangeToggler")
  ul.issues__list(v-if="visibleIssues")
    li.issues__item(v-for="(issue, index) in post.issues" :key="`${index}${issue.username}`")
      span.issues__username {{issue.user.login}}
      span.issues__issue {{issue.title}}
</template>

<script>
import Toggler from "@/components/toggler/toggler";
export default {
  name: "Issues",
  components: {
    Toggler,
  },
  emits: ["onChange"],
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      visibleIssues: false,
    };
  },
  methods: {
    handlingChangeToggler(value) {
      this.visibleIssues = value;
      if (value && !this.post.issues.length) {
        this.$emit("onChange");
      }
    },
  },
};
</script>

<style src="./_issues.scss" lang="scss" scoped />
