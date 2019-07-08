import { writable } from "svelte/store";

export const filters = ["gender"];
export const columns = ["eyeColor"];
export const rows = ["age"];
export const values = ["name"];
export const data = writable([]);