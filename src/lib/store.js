import { writable, derived, readable } from 'svelte/store';


export const term = writable('');
export const items = readable(["test"]);
export const filtered = derived(
    [term, items], 
    ([$term, $items]) => $items.filter(x => x.includes($term))
);
