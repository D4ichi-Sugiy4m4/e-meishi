import { atom } from "recoil";

export const OthersAddModalState = atom({
  key: "OthersAddModal",
  default: {
    isOpen: false,
  },
});
