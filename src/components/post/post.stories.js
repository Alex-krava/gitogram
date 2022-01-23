import Post from "./post";

export default {
  title: "Post",
  component: { Post },
};

export const defaultView = ({ post }) => ({
  title: "Post",
  components: { Post },
  setup() {
    return {
      post,
    };
  },
  template: `<post :post="post">----SLOT----</post>`,
});

defaultView.story = {
  name: "Default",
  args: {
    post: {
      avatar: "https://picsum.photos/300/300",
      username: "Josh",
      date: "15 May",
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
  },
};
