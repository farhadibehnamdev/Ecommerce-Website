import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import Hero from "./hero";
describe("Hero", () => {
  it("renders the component correctly", () => {
    render(<Hero />);
    // Assert that the component renders the expected text content
    expect(screen.getByText("Shop Now")).toBeInTheDocument();
  });
});
