import Topline from "./topline";

export default {
  title: "Topline",
  component: { Topline },
};

export const defaultView = () => ({
  title: "Topline",
  components: { Topline },
  template: `<topline>
    <template #header>Header</template>
  </topline>`,
});
