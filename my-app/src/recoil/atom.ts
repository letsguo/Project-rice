import { atom } from "recoil";

export const searchState = atom({
    key: 'searchState',
    default: ''
});

export const openToCollabState = atom({
    key: 'openToCollab',
    default: false,
});
