import { expect, vi } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";

console.log("Matchers:", matchers); // Debugging line

expect.extend(matchers);

global.fetch = vi.fn(async () =>
  new Response(JSON.stringify({ message: "Mocked response" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
);

vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: vi.fn(), // Mock the push function
  }),
}))