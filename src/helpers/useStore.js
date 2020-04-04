import { provide, inject } from '@vue/composition-api';

const storeSymbol = Symbol();

export const provideStore = (store)=>{
   provide(storeSymbol, store);
}

export const useStore = ()=>{
    const store = inject(storeSymbol);

    if(!store){
        // Logic coming soon...
    }

    return store;
}
