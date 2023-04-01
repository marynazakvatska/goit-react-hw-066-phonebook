import { configureStore } from "@reduxjs/toolkit";
/* import { contactsReducer } from "./contactsSlice"; */
import { filtersReducer } from "./filterSlice";
import { persistedContactReducer } from "./contactsSlice";
 import { persistStore } from 'redux-persist'
/* import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' */



/* const persistConfig = {
    key: 'root',
    storage,
}

const persistedClickReducer = persistReducer(
    persistConfig,
    contactsReducer,
    
) */

export const store = configureStore({
    reducer: {
        contacts: /* contactsReducer */persistedContactReducer,
        filter: filtersReducer,
    },

})

export const persistor = persistStore(store)