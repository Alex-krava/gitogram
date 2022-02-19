import { shallowMount } from "@vue/test-utils";
import Toggler from "@/components/toggler/toggler.vue";

describe("toggler.vue component", () => {
  it("Changing inscription after click", async () => {
    const noActiveText = "View issues";
    const activeText = "Hide issues";
    const wrapper = shallowMount(Toggler);

    expect(wrapper.find(".toggler__label").text()).toBe(noActiveText);
    await wrapper.find(".toggler").trigger("click");
    expect(wrapper.find(".toggler__label").text()).toBe(activeText);
  });
});
