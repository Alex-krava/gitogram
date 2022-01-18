<template lang="pug" src="./main.pug" />

<script>
import Post from "@/components/post/post";
import Card from "@/components/card/card";
import Topline from "@/components/topline/topline";

export default {
  name: "Home",
  components: {
    Post,
    Card,
    Topline,
  },
  data() {
    return {
      posts: [
        {
          id: "0",
          avatar: "https://picsum.photos/300/300",
          username: "Josh",
          date: "15 May",
          title: "Vue.js",
          descriptionType: "JavaScript",
          description: "framework for building interactive web applications ⚡",
          star: "156k",
          fork: "4",
          issues: [
            {
              username: "joshua_l",
              issue:
                "Enable performance measuring in production, at the user's request",
            },
            {
              username: "Camille",
              issue: "It's Impossible to Rename an Inherited Slot",
            },
            {
              username: "Marselle",
              issue:
                "transition-group with flex parent causes removed items to fly",
            },
          ],
        },
        {
          id: "1",
          avatar: "https://picsum.photos/300/300",
          username: "Andrew",
          date: "15 May",
          title: "React.js",
          descriptionType: "Open source",
          description: "JavaScript library used for designing user interfaces",
          star: "156k",
          fork: "4",
          issues: [
            {
              username: "joshua_l",
              issue:
                "Enable performance measuring in production, at the user's request",
            },
            {
              username: "Camille",
              issue: "It's Impossible to Rename an Inherited Slot",
            },
            {
              username: "Marselle",
              issue:
                "transition-group with flex parent causes removed items to fly",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style src="./main.scss" lang="scss" scoped />
