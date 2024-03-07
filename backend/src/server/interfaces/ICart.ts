export interface ICart {
  id: string;
  userId: string;
  streamingId: string;
  title?: string | null | undefined,
  description?: string | null | undefined,
  quantity?: number | null | undefined;
  price?: number | null | undefined
}
