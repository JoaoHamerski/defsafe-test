import { test, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";

import Button from "../components/App/Button.vue";
import { shallowMount } from "@vue/test-utils";

test("is defined", async () => {
  const component = mountSuspended(Button);

  expect(component).toBeDefined();
});

test("has default slot", async () => {
  const component = await mountSuspended(Button, {
    slots: {
      default: () => "Test button",
    },
  });

  expect(component.text()).contain("Test button");
});

test("has icon", async () => {
  const component = await mountSuspended(Button, {
    props: {
      icon: "material-symbols:refresh",
    },
  });

  expect(component.get("svg.icon").html()).toBeDefined();
});

test("has icon prop", () => {
  const iconProp = "icone";
  const response = shallowMount(Button, {
    props: {
      icon: iconProp,
    },
  });

  expect(response.props("icon")).toBe(iconProp);
});
