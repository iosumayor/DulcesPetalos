import { renderWithProviders } from "../../../../../tests/setup";
import { describe, it, expect } from "vitest";
import { Item } from "./Item";
import { screen } from "@testing-library/react";

describe("Item", () => {
  it("should render", () => {
    const productMock = {
      id: 1,
      name: "Rosa",
      binomialName: "Rosa gallica",
      price: 15.99,
      imgUrl: "https://example.com/rosa.jpg",
      wateringsPerWeek: 3,
      fertilizerType: "nitrogen" as const,
      heightInCm: 50,
    };

    renderWithProviders(<Item product={productMock} />);

    expect(screen.getByText("Rosa")).toBeInTheDocument();
    expect(screen.getByText("15.99€")).toBeInTheDocument();
  });
});
