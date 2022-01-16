<template src="./toggler.pug" lang="pug" />

<script>
import Icon from "@/components/icons/icon";

export default {
  name: "Toggler",
  components: {
    Icon,
  },
  emits: ["onChange"],
  data() {
    return {
      open: false,
      statusesText: {
        hide: "Hide",
        view: "View",
      },
    };
  },
  computed: {
    statusText() {
      return this.open ? this.statusesText.hide : this.statusesText.view;
    },
  },
  methods: {
    handlingClick() {
      this.open = !this.open;
      this.$emit("onChange", this.open);
    },
  },
};
</script>

<style src="./_toggler.scss" lang="scss" scoped />
