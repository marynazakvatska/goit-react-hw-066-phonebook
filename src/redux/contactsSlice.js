import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const contactsInitialState = [];

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
          reducer(state, action) {
          /*   state.find(cont =>
        cont.name.toLowerCase().includes(action.payload.name.toLowerCase())
    ) ? alert(`${action.payload.name} is already in your list`)
        : */ state.push(action.payload)
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
        const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});


export const { addContacts, deleteContact } = contactSlice.actions;
export const contacts = contactSlice.reducer;


const filterInitialState = "";


const filtersSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
     return state = action.payload;
    },
  },
});

export const {changeFilter} = filtersSlice.actions;
export const filters = filtersSlice.reducer;



const persistConfig = {
    key: 'root',
    storage,
}

export const persistedReducer = persistReducer(
    persistConfig,
  combineReducers({
    contacts, 
    filters
}),
    
)

