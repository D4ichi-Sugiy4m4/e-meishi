import getOthersList from "api/others/get";
import { selector } from "recoil";

export const useOthersList = selector({
  key: "OthersListSelector",
  get: async () => {
    const response = await getOthersList();
    return response;
  },
});
