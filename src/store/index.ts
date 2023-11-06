import { create } from "zustand";
import { IStore } from "./type";

export const useStore = create<IStore>((set) => ({
  productId: null,
  setProductId: (id) => set({ productId: id }),
}));
