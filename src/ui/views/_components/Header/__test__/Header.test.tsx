import { Header } from "../Header";
import { renderWithNavigation } from "../../../../../tests/setup";
import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";

describe("Header", () => {
  it("should show only Home link when on homepage", () => {
    renderWithNavigation(<Header />);

    const homeLink = screen.getByText("Inicio");
    expect(homeLink).toBeInTheDocument();

    const detailText = screen.queryByText("Detalle del producto");
    expect(detailText).not.toBeInTheDocument();
  });

  it("should show Detalle Producto if you are in the product detail page", () => {
    renderWithNavigation(<Header />, ["/item/1"]);

    const homeLink = screen.getByText("Inicio");
    expect(homeLink).toBeInTheDocument();

    const detailText = screen.getByText("Detalle del producto");
    expect(detailText).toBeInTheDocument();
  });
});
