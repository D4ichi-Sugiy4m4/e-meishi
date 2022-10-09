import getCardList from "api/get";
import { selector } from "recoil";

export const useCardList = selector({
  key: "CardListSelector",
  get: async () => {
    const response = await getCardList();
    return response;
  },
});
