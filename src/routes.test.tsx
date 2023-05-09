import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Routes } from "./routes";

describe("Routes", () => {
  it("should render home", () => {
    render(<Routes />);

    expect(screen.getByText(/Home!/)).toBeDefined();
  });
});

