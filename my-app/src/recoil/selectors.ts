import {selector} from "recoil";
import {openToCollabState, searchState} from "./atom";

export const searchSelector = selector({
    key: 'searchSelector',
    get: ({ get }) => {
        return get(searchState);
    },
});

export const openToCollabSelector = selector({
    key: 'openToCollabSelector',
    get: ({ get }) => {
        return get(openToCollabState)
    }
});