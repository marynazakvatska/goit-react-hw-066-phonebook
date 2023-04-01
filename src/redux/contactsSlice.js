import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'
import { /* persistStore, */ persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactsInitialState = [];

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
          reducer(state, action) {
            state.find(cont =>
        cont.name.toLowerCase().includes(action.payload.name.toLowerCase())
    ) ? alert(`${action.payload.name} is already in your list`)
        : state.push(action.payload)
      },
      prepare({name, number}) {
        return {
          payload: {
                name,
                number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
        /*    state.filter(contact => contact.id !== action.payload ) */
         const index = state.findIndex(contact => contact.id !== action.payload);
      state.splice(index, 1);
    },
   
  },
});



const persistConfig = {
    key: 'root',
    storage,
}

export const persistedContactReducer = persistReducer(
    persistConfig,
   contactSlice.reducer,
    
)


export const { addContacts, deleteContact } = contactSlice.actions;
/* export const contactsReducer = contactSlice.reducer;
 */
