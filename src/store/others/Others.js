import getOthersInfo from "api/others/:othersId/get";
import { atom, selector } from "recoil";

const OthersState = atom({
  key: "Others",
  default: {
    company: "",
    department: "",
    rank: "",
    name: "",
    phone: "",
    mail: "",
  },
});

export const useOthersApi = selector({
  key: "OthersApiSelector",
  get: async () => {
    const response = await getOthersInfo();
    return response;
  },
});

export const useOthersState = selector({
  key: "OthersStateSelector",
  get: async ({ get }) => get(OthersState),
  set: ({ set }, newVal) => set(OthersState, newVal),
});
