import { renderWithProviders } from "../../../../../tests/setup";
import { ProductItem } from "./ProductItem";
import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";

describe("ProductItem", () => {
  it("should render", () => {
    const productMock = {
      id: 1,
      name: "Rosa",
      binomialName: "Rosa gallica",
      price: 15.99,
      imgUrl: "https://example.com/rosa.jpg",
      wateringsPerWeek: 3,
      fertilizerType: "Fosforado",
      heightInCm: 50,
    };
    renderWithProviders(<ProductItem product={productMock} />);

    expect(screen.getByText("Rosa")).toBeInTheDocument();
    expect(screen.getByText(/15\.99/)).toBeInTheDocument();
    expect(screen.getByAltText("Rosa")).toBeInTheDocument();
    expect(screen.getByText(/3/)).toBeInTheDocument();
    expect(screen.getByText(/Fosforado/)).toBeInTheDocument();
    expect(screen.getByText(/50.*cm/)).toBeInTheDocument();
  });
});
