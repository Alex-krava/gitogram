import { mount } from "@vue/test-utils";
import Issues from "@/components/issues/issues.vue";

describe("issues.vue component", () => {
  it("Not performed onChange event if there're issues", async () => {
    const issue = {
      title: "Test title",
      user: {
        login: "Test login",
      },
    };

    const wrapper = mount(Issues, {
      propsData: {
        post: { issues: Array.from({ length: 6 }).map((x) => issue) },
      },
    });

    await wrapper.find(".issues__toggler button").trigger("click");
    expect(wrapper.emitted("onChange")).toBeUndefined();
  });

  it("Performed onChange event if issues is empty", async () => {
    const wrapper = mount(Issues, {
      propsData: {
        post: { issues: [] },
      },
    });

    await wrapper.find(".issues__toggler button").trigger("click");
    expect(wrapper.emitted("onChange")).toBeTruthy();
  });

  it("Draw list elements", async () => {
    const issue = {
      title: "Test title",
      user: {
        login: "Test login",
      },
    };

    const wrapper = mount(Issues, {
      propsData: {
        post: { issues: Array.from({ length: 6 }).map((x) => issue) },
      },
    });

    await wrapper.find(".issues__toggler button").trigger("click");

    expect(wrapper.findAll(".issues__item").length).toBe(6);
  });
});
