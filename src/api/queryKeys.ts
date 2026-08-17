export const queryKeys = {
  photos: (limit: number) => ['photos', limit] as const,
  user: (id: number) => ['user', id] as const,
};
