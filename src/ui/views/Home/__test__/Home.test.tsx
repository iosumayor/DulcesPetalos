import { describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "../../../../tests/setup";
import { Home } from "../Home";
import * as productServer from "../../../../api/fake-server/products/products.server";
import { screen } from "@testing-library/react";
describe("Home", () => {
  it("should call products", async () => {
    vi.spyOn(productServer, "getProducts").mockResolvedValue({
      products: [
        {
          id: 1,
          name: "Rosa",
          price: 12.99,
          imgUrl: "https://example.com/rosa.jpg",
          binomialName: "Rosa gallica",
          wateringsPerWeek: 3,
          fertilizerType: "phosphorus",
          heightInCm: 60,
        },
        {
          id: 2,
          name: "Tulipa",
          price: 12.99,
          imgUrl: "https://example.com/tulipa.jpg",
          binomialName: "Tulipa sylvestris",
          wateringsPerWeek: 2,
          fertilizerType: "nitrogen",
          heightInCm: 40,
        },
      ],
    });
    renderWithProviders(<Home />);

    const rosaElement = await screen.findByText("Rosa");
    expect(rosaElement).toBeVisible();

    const tulipaElement = await screen.findByText("Tulipa");
    expect(tulipaElement).toBeVisible();

    expect(productServer.getProducts).toHaveBeenCalled();
  });
});
