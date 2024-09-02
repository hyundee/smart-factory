import { atom, atomFamily } from "recoil";

export const modalState = atomFamily({
    key: "modalState",
    default: () => ({
        isOpen: false,
    }),
});
