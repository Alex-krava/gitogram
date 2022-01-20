import Avatar from "./avatar";

export default {
  title: "Avatar",
  component: {
    Avatar,
  },
};

const args = {
  size: 80,
  src: "https://picsum.photos/300/300",
};

export const defaultView = ({ size, src }) => ({
  title: "Avatar",
  components: { Avatar },
  template: `<avatar :size="${size}" src="${src}" />`,
});

export const withBorderView = ({ size, src }) => ({
  components: { Avatar },
  template: `<avatar with-border :size="${size}" src="${src}" />`,
});

defaultView.story = {
  name: "Default",
  args,
};

withBorderView.story = {
  name: "With Boarder",
  args,
};
