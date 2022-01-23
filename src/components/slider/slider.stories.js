import Slider from "./slider.vue";

export default {
  title: "Slider",
  component: Slider,
};

export const Default = (args) => ({
  data() {
    return {
      ...args,
    };
  },
  components: { Slider },
  template: `
      <slider v-bind="$props" :userAvatar="userAvatar"  :repoName="repoName" >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in magna ac justo laoreet placerat. Etiam ac ipsum nisi. Nam in porttitor mi. Vivamus quis risus a purus semper convallis vitae in ante. Nam rutrum venenatis sem, vel rutrum enim fringilla cursus. Phasellus diam elit, mattis vitae tempus in, mattis aliquam tellus. Sed eu lacus vulputate, pellentesque enim nec, ultrices lectus. Etiam vulputate mi quis lobortis efficitur. Aliquam placerat consectetur nibh, at scelerisque leo. Mauris pulvinar vulputate nibh, sit amet vehicula dui accumsan sit amet. Mauris placerat quam ac arcu eleifend imperdiet. Vestibulum scelerisque, ipsum non rhoncus sagittis, magna massa hendrerit felis, vitae volutpat nibh diam in leo. Donec nunc ipsum, mattis et auctor id, imperdiet vel lorem. Pellentesque auctor id quam vel bibendum.</p>
      </slider>
  `,
});

Default.args = {
  userAvatar: "https://picsum.photos/300/300",
  repoName: "React.reposit",
};
