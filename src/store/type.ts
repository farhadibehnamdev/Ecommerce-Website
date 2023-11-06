export interface IStore {
  productId: string | null;
  setProductId: (id: string) => void;
}
