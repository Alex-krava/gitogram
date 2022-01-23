import AvatarList from "./avatars-list";

export default {
  title: "Avatar List",
  component: { AvatarList },
};

export const defaultView = () => ({
  title: "Avatar List",
  components: { AvatarList },
  template: `<avatar-list />`,
});
