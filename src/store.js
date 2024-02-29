import { create } from "zustand";

export const useQrCode = create((set) => ({
  qrcode: "",
  addQrCode: (new_qr) => set(() => ({ qrcode: new_qr })),
}));
