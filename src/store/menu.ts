import { atomFamily, selector } from "recoil";
import { MenuList } from "@/constants/MenuList";

type MenuPath = "mainPath" | "subPath" | "thirdPath";

export const pathState = atomFamily<string, MenuPath>({
    key: "pathState",
    default: "",
});

export const mainMenuState = selector({
    key: "mainMenuState",
    get: ({ get }) => {
        const selectedMainPath = get(pathState("mainPath"));
        return MenuList.find((menu) => menu.path === selectedMainPath);
    },
});
