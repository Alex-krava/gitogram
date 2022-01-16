<template lang="pug" src="./avatars-list.pug" />

<script>
import Avatar from "@/components/avatar/avatar";

export default {
  name: "avatarsList",

  components: {
    Avatar,
  },

  data() {
    return {
      avatars: [
        {
          src: "https://picsum.photos/300/300",
          name: "Josh",
        },
        {
          src: "https://picsum.photos/300/300",
          name: "Andrew",
        },
        {
          src: "https://picsum.photos/300/300",
          name: "Camille",
        },
        {
          src: "https://picsum.photos/300/300",
          name: "Marselle",
        },
        {
          src: "https://picsum.photos/300/300",
          name: "Piter",
        },
        {
          src: "https://picsum.photos/300/300",
          name: "Can",
        },
        {
          src: "https://picsum.photos/300/300",
          name: "Iloveanime",
        },
        {
          src: "https://picsum.photos/300/300",
          name: "Diself",
        },
        {
          src: "https://picsum.photos/300/300",
          name: "Gartor",
        },
        {
          src: "https://picsum.photos/300/300",
          name: "Camilr",
        },
      ],
    };
  },
};
</script>

<style src="./_avatars-list.scss" lang="scss" scoped />
