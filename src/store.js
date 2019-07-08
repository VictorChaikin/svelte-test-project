import { writable } from "svelte/store";

export const filters = ["gender"];
export const columns = ["age"];
export const rows = ["favoriteFruit"];
export const values = ["name"];
export const data = writable([]);