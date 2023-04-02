import {  createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'



const contactsInitialState = [];

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
          reducer(state, action) {
         state.push(action.payload)
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

