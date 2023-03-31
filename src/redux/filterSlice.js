import { createSlice } from "@reduxjs/toolkit";


const filterInitialState = "";


const filtersSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      state = action.payload;
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const {changeFilter} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;




/* 
 const contactsSlice = createSlice({
   
     name: "contacts",
    initialState: contactsInitialState,
     reducers: {
         addContact: (state, action) {state.find(cont =>
        cont.name.toLowerCase().includes(payload.name.toLowerCase())
    ) ? alert(`${payload.name} is already in your list`)
        : state.push(action.payload)
   } ,
      
     deleteContact(state, action) { 
       state.filter(action.payload.id => action.payload.id !== payload) }
  
 }) */
     
/*  const filerSlice = createSlice({
     name: "filter",
    initialState: filterInitialState,
 const filter = createReducer({
    [changeFilter]: (state, {payload}) => state = payload
}) 

export default {filter, contacts} */
