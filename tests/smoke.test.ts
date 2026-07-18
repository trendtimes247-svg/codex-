import { describe, expect, it } from "vitest";
import { siteConfig } from "@/config/site";

describe("siteConfig", () => {
  it("defines production navigation", () => {
    expect(siteConfig.nav.length).toBeGreaterThan(0);
  });
});
