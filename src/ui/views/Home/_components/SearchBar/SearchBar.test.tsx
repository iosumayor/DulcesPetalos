import { renderWithProviders } from "../../../../../tests/setup";
import { SearchBar } from "./SearchBar";
import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";

describe("SearchBar", () => {
  it("should render", () => {
    renderWithProviders(<SearchBar search="test" setSearch={() => {}} />);

    expect(screen.getByPlaceholderText("Buscar")).toBeInTheDocument();
  });
});
