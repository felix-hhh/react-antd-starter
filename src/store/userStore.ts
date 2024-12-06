import { create, StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { UserToken } from "#/entity.ts";
import Base64 from "crypto-js/enc-base64";
import Utf8 from "crypto-js/enc-utf8";

export interface UserState {
  userToken: UserToken | undefined;
  token: string | undefined;
  setUserToken: (token: string) => void;
}

const forestSlice: StateCreator<UserState, [["zustand/persist", unknown]]> = (set) => ({
  userToken: undefined,
  token: undefined,
  setUserToken: (tokenStr: string) => {
    const tokenStrArr: string[] = tokenStr.split(".");
    const userToken: UserToken = JSON.parse(Base64.parse(tokenStrArr[1]).toString(Utf8));
    userToken.userData = JSON.parse(userToken.userData.toString());

    set({
      token: tokenStrArr[2],
      userToken: userToken,
    });
  },
});


export const useUserToken = create(
  persist(forestSlice, {
    name: "forest-storage",
    storage: createJSONStorage(() => sessionStorage),
  })
);