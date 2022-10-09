import getAccountInfo from "api/account/get";
import { atom, selector } from "recoil";

const AccountState = atom({
  key: "Account",
  default: {
    company: "",
    department: "",
    rank: "",
    name: "",
    phone: "",
    mail: "",
  },
});

export const useAccountApi = selector({
  key: "AccountApiSelector",
  get: async () => {
    const response = await getAccountInfo()
    return response
  }
})

export const useAccountState = selector({
  key: "AccountStateSelector",
  get: ({ get }) => get(AccountState),
  set: ({ set }, newVal) => set(AccountState, newVal),
});
