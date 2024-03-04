import { defineVitestConfig } from "@nuxt/test-utils/config";
import vuePlugin from "@vitejs/plugin-vue";

export default defineVitestConfig({
  test: {
    environment: "nuxt",
  },
});
