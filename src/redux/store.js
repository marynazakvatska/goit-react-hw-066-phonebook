import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
/* import { contactsReducer } from "./contactsSlice"; */
import { filtersReducer } from "./filterSlice";
import { persistedContactReducer } from "./contactsSlice";
 /* import { persistStore } from 'redux-persist' */
/* import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' */
import {
  persistStore, 
   FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


/* const persistConfig = {
    key: 'root',
    storage,
}

const persistedClickReducer = persistReducer(
    persistConfig,
    contactsReducer,
    
) */

/* const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

]; */

export const store = configureStore({
    reducer: {
        contacts: /* contactsReducer */persistedContactReducer,
        filter: filtersReducer,
      
    },
  middleware(getDefaultMiddleware) {
            return getDefaultMiddleware({
                 serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
            })
        }
})

export const persistor = persistStore(store)