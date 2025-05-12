import { renderWithProviders } from "../../../../../tests/setup";
import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { BackButton } from "./BackButton";

describe("BackButton", () => {
  it("should render", () => {
    renderWithProviders(<BackButton />);

    expect(screen.getByText("Volver")).toBeInTheDocument();
  });
});
