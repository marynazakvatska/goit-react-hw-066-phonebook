import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'



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
                name: '',
                number: "",
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
    state.filter(contact => contact.id !== action.payload )
    },
   
  },
});




export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

