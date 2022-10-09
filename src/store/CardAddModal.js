import { atom } from "recoil";

export const CardAddModalState = atom({
  key: "CardAddModal",
  default: {
    isOpen: false,
    image: "",
  },
});
