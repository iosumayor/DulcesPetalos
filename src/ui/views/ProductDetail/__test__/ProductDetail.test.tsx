import { describe, expect, it, vi } from "vitest";
import { ProductDetail } from "../ProductDetail";
import * as productServer from "../../../../api/fake-server/products/products.server";
import { renderWithProviders } from "../../../../tests/setup";
import { waitFor } from "@testing-library/react";
import { screen } from "@testing-library/react";

describe("ProductDetail", () => {
  it("should call getProductById", async () => {
    vi.spyOn(productServer, "getProductById").mockResolvedValue({
      id: 1,
      name: "Rosa",
      binomialName: "Rosa gallica",
      price: 12.99,
      imgUrl: "https://example.com/rosa.jpg",
      wateringsPerWeek: 3,
      fertilizerType: "phosphorus",
      heightInCm: 60,
    });

    renderWithProviders(<ProductDetail />);

    await waitFor(() => {
      expect(productServer.getProductById).toHaveBeenCalled();
    });
    expect(screen.getByText("Rosa")).toBeInTheDocument();
  });
});
