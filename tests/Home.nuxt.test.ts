import { setup, url } from "@nuxt/test-utils";
import { beforeEach } from "vitest";
import { expect } from "vitest";
import { describe } from "vitest";
import { test } from "vitest";
import { consola } from "consola";

describe("home page", async () => {
  beforeEach(() => {
    consola.restoreConsole();
  });

  await setup({});

  test("can get cat facts api", async () => {
    const response = await fetch(url("/api/cat-facts"));

    expect(response.status).toBe(200);
  });

  test("can get cat facts page", async () => {
    const response = await fetch(url("/"));

    expect(response.status).toBe(200);
  });
});
