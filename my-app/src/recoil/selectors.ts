import {selector} from "recoil";
import { searchState } from "./atom";

export const searchSelector = selector({
    key: 'searchSelector',
    get: ({ get }) => {
        return get(searchState);
    },
});