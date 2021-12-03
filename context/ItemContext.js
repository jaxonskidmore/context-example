/* TODO: Create the ItemContext and useItems() function */
import { createContext, useContext } from 'react';

export const ItemContext = createContext({
    item: {}, // data object stored
    setItems: () => {} // updater function so child components can modify
});

export function useItems() {
    return useContext(ItemContext);
}
  