export const queryKeys = {
  photos: (limit: number) => ['photos', limit] as const,
  user: (id: number) => ['user', id] as const,
  productsSearch: (query: string) => ['products', 'infinite', query] as const,
  product: (id: number) => ['product', id] as const,
};
