export const ROUTES = {
  HOME: "/",
  PRODUCT_DETAIL: "/item/:id",
};

export const getProductDetailRoute = (id: number | string) => {
  return ROUTES.PRODUCT_DETAIL.replace(":id", id.toString());
};
