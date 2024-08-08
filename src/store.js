import { writable, derived, readable } from 'svelte/store';

import blog1 from './blogs/blog1.md?raw';
import item from './blogs/post2.json';
import { post3 } from './blogs/post3';


export const term = writable('');
export const items = readable([blog1, item.content, post3.content]);
export const filtered = derived(
    [term, items], 
    ([$term, $items]) => $items.filter(x => x.includes($term))
);
